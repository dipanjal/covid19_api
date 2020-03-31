let axios = require('axios');
const cheerio = require('cheerio');
const _ = require('lodash');

let CovidReportModel = require('../models/CovidReportModel');
let modelConverter = require('../helpers/ModelConverter');
let covidLogger = require('../logger/CovidCustomLogger');

let apiStatus = require('../models/ApiStatus');

let requestUrl = 'https://www.worldometers.info/coronavirus/';

let CoreModule = {
    sanitizeValues: (valueString) => {
        return valueString.trim().replace(new RegExp("[\+,]+","gm"),'');
    },
    loadPage: (requestUrl) => {
        return new Promise((resolve, reject) => {
            console.log("*** scrapping from web ***");
            axios.get(requestUrl).then(response => {
                resolve(response.data);
            }).catch(err => {
                apiStatus.REMOTE_ERROR.message = err.message || apiStatus.REMOTE_ERROR.message;
                reject(apiStatus.REMOTE_ERROR);
            });
        })
    },
    scrapTableFromDom: (dom, childNo = 0, yesterday = false) => {
        return new Promise((resolve, reject) => {
            let $ = cheerio.load(dom);
            let modelKeys = Object.keys(CovidReportModel);
            let covidReports = [];
            try{
                let tbody = yesterday ? $('#main_table_countries_yesterday tbody').eq(childNo):
                    $('#main_table_countries_today tbody').eq(childNo);

                if(!tbody.length) reject(apiStatus.RECORD_NOT_FOUND);

                $(tbody).find('tr').each((index,tr)=>{
                    let data = {};
                    $(tr).find('td').each((i,td)=>{
                        if(i < modelKeys.length){
                            let key = modelKeys[i];
                            let value = CoreModule.sanitizeValues($(td).text()).toLowerCase();
                            if(key) data[key] = value ? value : '';
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
    }
};

let Privates = {
    Report:{
        scrapTableFromRequestUrl: (reqUrl, yesterdayFlag = false) => {
            return new Promise(((resolve, reject) => {
                CoreModule.loadPage(reqUrl)
                    .then(dom => {return CoreModule.scrapTableFromDom(dom, 0, yesterdayFlag)})
                    .then(covidReportsSuccessResponse => {
                        resolve(covidReportsSuccessResponse);
                    })
                    .catch(errResponse => {
                        reject(errResponse);
                    });
            }));
        },
        scrapReportForToday: (reqUrl) => {
            return Privates.Report.scrapTableFromRequestUrl(reqUrl);
        },
        scrapReportForYesterday: (reqUrl) => {
            return Privates.Report.scrapTableFromRequestUrl(reqUrl, true);
        }
    },

    Summary : {
        scrapCovidSummaryFromUrl: (reqUrl, yesterdayFlag = false) => {
            return new Promise(((resolve, reject) => {
                CoreModule.loadPage(reqUrl)
                    .then(dom => {return CoreModule.scrapTableFromDom(dom,1, yesterdayFlag)})
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

        scrapSummaryForToday: (reqUrl) => {
            return Privates.Summary.scrapCovidSummaryFromUrl(reqUrl);
        },
        scrapSummaryForYesterday: (reqUrl) => {
            return Privates.Summary.scrapCovidSummaryFromUrl(reqUrl, true);
        }
    },


    parseTableForSpecificCountry: (requestUrl,countryName) => {
        return new Promise((resolve, reject) => {
            Privates.Report.scrapTableFromRequestUrl(requestUrl).then(response => {
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

module.exports.getAllReportsForTodayFromScrapper = () => {
    return Privates.Report.scrapReportForToday(requestUrl);
};

module.exports.getAllReportsForYesterdayFromScrapper = () => {
    return Privates.Report.scrapReportForYesterday(requestUrl);
};

/*module.exports.getCovidReportSummaryFromScrapper = () => {
    return Privates.scrapCovidSummaryFromUrl(requestUrl);
};*/
module.exports.getSummaryForTodayFromScrapper = () => {
    return Privates.Summary.scrapSummaryForToday(requestUrl);
};

module.exports.getSummaryForYesterdayFromScrapper = () => {
    return Privates.Summary.scrapSummaryForYesterday(requestUrl);
};

module.exports.getReportByCountryFromScrapper = (countryName) => {
    return Privates.parseTableForSpecificCountry(requestUrl, countryName);
};
