const NodeCache = require( "node-cache" );
const cacheSettings = require('../configuration/AppSettings').CacheSettings;
const modelConverter = require('../helpers/ModelConverter');
const _ = require('lodash');

const apiResponse = require('../models/ApiStatus');
const covidLogger = require('../logger/CovidCustomLogger');

let covidCache = new NodeCache({
    stdTTL: cacheSettings.stdTTL,
    checkperiod: cacheSettings.checkperiod
});

let cacheErrors = {
    SAVE_ERROR: 'error while caching data',
    READ_ERROR: 'error while fetching data from cache',
};

module.exports.cacheKeys = {
    ALL_COVID_DATA_TODAY: 'covid_data_all_today',
    ALL_COVID_DATA_YESTERDAY: 'covid_data_all_yesterday',
    COVID_SUMMARY_TODAY: 'covid_summary_today',
    COVID_SUMMARY_YESTERDAY: 'covid_summary_yesterday',
    AVAILABLE_COUNTRIES: 'countries_available'
};

module.exports.save = (dataModels, key) => {
    return new Promise(((resolve, reject) => {
        console.log("*** updating cache ***");
        if(!modelConverter.isEmptyObject(dataModels)){
            let status = covidCache.set(key , dataModels);
            if(status){
                apiResponse.SUCCESS.data = dataModels;
                resolve(apiResponse.SUCCESS)
            }else{
                apiResponse.INTERNAL_SERVER_ERROR.message = cacheErrors.SAVE_ERROR;
                reject(apiResponse.INTERNAL_SERVER_ERROR);
            }
        }else{
            reject(apiResponse.RECORD_NOT_FOUND);
        }

    }))
};


let getAllReportFromCache = (key) => {
    return new Promise(((resolve, reject) => {
        let dataModels = covidCache.get(key);
        if(!modelConverter.isEmptyObject(dataModels)){
            console.log('*** loading reports from cache ***');
            apiResponse.SUCCESS.data = dataModels;
            resolve(apiResponse.SUCCESS);
        }else{
            reject(apiResponse.RECORD_NOT_FOUND);
        }
    }));
};

module.exports.getAllReportForTodayFromCache = () => {
    return getAllReportFromCache(this.cacheKeys.ALL_COVID_DATA_TODAY);
};
module.exports.getAllReportForYesterdayFromCache = () => {
    return getAllReportFromCache(this.cacheKeys.ALL_COVID_DATA_YESTERDAY);
};

let getSummaryFromCache = (key) => {
    return new Promise(((resolve, reject) => {
        console.log('*** loading summary from cache ***');
        let dataModels = covidCache.get(key);
        if(!modelConverter.isEmptyObject(dataModels)){
            apiResponse.SUCCESS.data = dataModels;
            resolve(apiResponse.SUCCESS);
        }else{
            reject(apiResponse.RECORD_NOT_FOUND);
        }
    }));
};

module.exports.getSummaryForTodayFromCache = () => {
    return getSummaryFromCache(this.cacheKeys.COVID_SUMMARY_TODAY);
};
module.exports.getSummaryForYesterdayFromCache = () => {
    return getSummaryFromCache(this.cacheKeys.COVID_SUMMARY_YESTERDAY);
};

let getByCountryFromCache = (countryName, yesterdayFlag = false ) => {
    return new Promise(((resolve, reject) => {
        let keySuffix = yesterdayFlag ? '_yesterday':'';
        let keyToSearch = countryName.toLowerCase()+keySuffix;
        let data = covidCache.get(keyToSearch); //fetching from country cache

        if(modelConverter.isEmptyObject(data)){
            console.log("*** loading country from cache ***");
            let dynamicFunctionCaller = yesterdayFlag ?
                this.getAllReportForYesterdayFromCache : this.getAllReportForTodayFromCache;

            dynamicFunctionCaller().then(allDataSuccessResponse => {
                let dataSingle = _.find(allDataSuccessResponse.data, {country_name: keyToSearch});
                if(dataSingle){
                    this.save(dataSingle, keyToSearch); //country wise caching
                    apiResponse.SUCCESS.data = dataSingle;
                    resolve(apiResponse.SUCCESS);
                }else{
                    reject(apiResponse.RECORD_NOT_FOUND);
                }
            }).catch(err => reject(err))
        }else{
            console.log("*** loading country from cache ***");
            apiResponse.SUCCESS.data = data;
            resolve(apiResponse.SUCCESS);
        }
    }))
};



module.exports.getReportByCountryForTodayFromCache = (countryName) => {
    return getByCountryFromCache(countryName);
};

module.exports.getReportByCountryForYesterdayFromCache = (countryName) => {
    return getByCountryFromCache(countryName, true);
};

module.exports.getAvailableCountriesFromCache = () => {
    return new Promise((resolve, reject) => {
        let countries = covidCache.get(this.cacheKeys.AVAILABLE_COUNTRIES);
        if(countries){
            console.log("*** loading country list from cache ***");
            apiResponse.SUCCESS.data = countries;
            resolve(apiResponse.SUCCESS);
        }else{
            reject(apiResponse.RECORD_NOT_FOUND);
        }
    });
};

