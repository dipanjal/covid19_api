let axios = require('axios');
const cheerio = require('cheerio');
const _ = require('lodash');

let CovidReportModel = require('../models/CovidReportModel');
let modelConverter = require('../helpers/ModelConverter');
let covidLogger = require('../logger/CovidCustomLogger');

let apiStatus = require('../models/ApiStatus');

let requestUrl = 'https://www.worldometers.info/coronavirus/';

let Privates = {
    sanitizeValues: (valueString) => {
        return valueString.trim().replace(new RegExp("[\+,]+","gm"),'');
    },
    loadPage: (requestUrl) => {
        return new Promise((resolve, reject) => {
            axios.get(requestUrl).then(response => {
                resolve(response.data);
            }).catch(err => {
                apiStatus.REMOTE_ERROR.message = err.message || apiStatus.REMOTE_ERROR.message;
                reject(apiStatus.REMOTE_ERROR);
            });
        })
    },
    scrapTableFromDom: (dom, childNo = 0) => {
        return new Promise((resolve, reject) => {
            let $ = cheerio.load(dom);
            let modelKeys = Object.keys(CovidReportModel);
            let covidReports = [];
            try{
                let tbody = $('#main_table_countries_today tbody').eq(childNo);

                if(!tbody.length) reject(apiStatus.RECORD_NOT_FOUND);

                $(tbody).find('tr').each((index,tr)=>{
                    let data = {};
                    $(tr).find('td').each((i,td)=>{
                        if(i < modelKeys.length){
                            let key = modelKeys[i];
                            let value = Privates.sanitizeValues($(td).text()).toLowerCase();
                            if(key && value) data[key] = value;
                        }
                    });
                    covidReports.push(data);
                });
                apiStatus.SUCCESS.data = covidReports;
                resolve(apiStatus.SUCCESS);
            }catch (e) {
                apiStatus.RECORD_NOT_FOUND.message = e.message || apiStatus.RECORD_NOT_FOUND.message;
                reject(apiStatus.RECORD_NOT_FOUND);
            }
        });
    },
    scrapTableFromRequestUrl: (reqUrl) => {
        return new Promise(((resolve, reject) => {
            Privates.loadPage(reqUrl)
                .then(dom => {return Privates.scrapTableFromDom(dom, 0)})
                .then(covidReportsSuccessResponse => {
                    resolve(covidReportsSuccessResponse);
                })
                .catch(errResponse => {
                    reject(errResponse);
                });

        }));
    },
    scrapCovidSummary: (reqUrl) => {
        return new Promise(((resolve, reject) => {
            Privates.loadPage(reqUrl)
                .then(dom => {return Privates.scrapTableFromDom(dom,1)})
                .then(covidReportsSuccessResponse => {
                    let obj = covidReportsSuccessResponse.data[0];
                    obj.country_name = '';
                    covidReportsSuccessResponse.data = obj;
                    resolve(covidReportsSuccessResponse);
                })
                .catch(errResponse => {
                    reject(errResponse);
                });
        }));
    },
    parseTableForSpecificCountry: (requestUrl,countryName) => {
        return new Promise((resolve, reject) => {
            Privates.scrapTableFromRequestUrl(requestUrl).then(response => {
                let data = _.find(response.data, {country_name: countryName.toLocaleLowerCase()});
                if(!modelConverter.isEmpty(data)){
                    apiStatus.SUCCESS.data = data;
                    resolve(apiStatus.SUCCESS);
                }else reject(apiStatus.RECORD_NOT_FOUND);
            }).catch(err => {
                apiStatus.REMOTE_ERROR.message = err.message || apiStatus.REMOTE_ERROR.message;
                reject(apiStatus.REMOTE_ERROR);
            });
        });
    }
};

module.exports.getAllReportsForToday = () => {
    return Privates.scrapTableFromRequestUrl(requestUrl);
};
module.exports.getCovidReportSummary = () => {
    return Privates.scrapCovidSummary(requestUrl);
};
module.exports.getReportByCountry = (countryName) => {
    console.log("*** scrapping country from web ***");
    return Privates.parseTableForSpecificCountry(requestUrl, countryName);
};
