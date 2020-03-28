const NodeCache = require( "node-cache" );
const cacheSettings = require('../configuration/AppSettings').CacheSettings;
const modelConverter = require('../helpers/ModelConverter');
const _ = require('lodash');

const apiStatus = require('../models/ApiStatus');
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
    ALL_COVID_DATA: 'covid_data_all',
    COVID_SUMMARY: 'covid_summary'
};

/*let Private = {
    init: () => {
        if(!covidCache){
            covidCache = new NodeCache({
                stdTTL: cacheSettings.stdTTL,
                checkperiod: cacheSettings.checkperiod
            });
        }
    }
};*/

module.exports.save = (dataModels, key = this.cacheKeys.ALL_COVID_DATA) => {
    return new Promise(((resolve, reject) => {
        // let cacheableModel = modelConverter.DataModelsToCacheModels(key, dataModels);
        if(!modelConverter.isEmpty(dataModels)){
            let status = covidCache.set(key , dataModels);
            if(status){
                apiStatus.SUCCESS.data = dataModels;
                resolve(apiStatus.SUCCESS)
            }else{
                apiStatus.INTERNAL_SERVER_ERROR.message = cacheErrors.SAVE_ERROR;
                reject(apiStatus.INTERNAL_SERVER_ERROR);
            }
        }else{
            reject(apiStatus.RECORD_NOT_FOUND);
        }

    }))
};


module.exports.getAllFromCache = () => {
    return new Promise(((resolve, reject) => {
        let dataModels = covidCache.get(this.cacheKeys.ALL_COVID_DATA);
        if(!modelConverter.isEmpty(dataModels)){
            console.log('*** loaading from cache ***');
            apiStatus.SUCCESS.data = dataModels;
            resolve(apiStatus.SUCCESS);
        }else{
            reject(apiStatus.RECORD_NOT_FOUND);
        }
    }));
};

module.exports.getByCountryFromCache = (countryName) => {
    return new Promise(((resolve, reject) => {
        console.log("*** loading country from cache ***");
        let data = covidCache.get(countryName.toLowerCase()); //fetching from country cache
        if(modelConverter.isEmpty(data)){
            this.getAllFromCache().then(allDataSuccessResponse => {
                let dataSingle = _.find(allDataSuccessResponse.data, {country_name: countryName.toLocaleLowerCase()});
                if(dataSingle){
                    this.save(dataSingle, countryName); //country wise caching
                    apiStatus.SUCCESS.data = dataSingle;
                    resolve(apiStatus.SUCCESS);
                }else{
                    reject(apiStatus.RECORD_NOT_FOUND);
                }
            }).catch(err => reject(err))
        }else{
            apiStatus.SUCCESS.data = data;
            resolve(apiStatus.SUCCESS);
        }
    }))
};

module.exports.getSummaryFromCache = () => {
    return new Promise(((resolve, reject) => {
        let dataModels = covidCache.get(this.cacheKeys.COVID_SUMMARY);
        if(!modelConverter.isEmpty(dataModels)){
            console.log('*** loading summary from cache ***');
            apiStatus.SUCCESS.data = dataModels;
            resolve(apiStatus.SUCCESS);
        }else{
            reject(apiStatus.RECORD_NOT_FOUND);
        }
    }));
};

