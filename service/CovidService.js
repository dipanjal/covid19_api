let covidScrapper = require('./CovidScrapper');
let cacheService = require('./CovidCacheService');
let modelConverter = require('../helpers/ModelConverter');
let apiResponse = require('../models/ApiStatus');
let covidDBService = require('./CovidDBService');

const Private = {
    getFromScrapperAndUpdate: () => {
        return new Promise((resolve, reject) => {
            covidScrapper.getAllReportsForTodayFromScrapper()
                .then(scrappedResponse => {
                    resolve(scrappedResponse);
                    cacheService.save(scrappedResponse.data, cacheService.cacheKeys.ALL_COVID_DATA_TODAY);
                    covidDBService.saveReportsInDB(scrappedResponse.data);
                }).catch(errResponse => reject(errResponse))
        });
    }
}

module.exports.getAllCountryReportsForToday = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getAllReportForTodayFromCache()
            .then(cachedResponse => resolve(cachedResponse))
            .catch( cacheErrResponse => {
                covidDBService.getReportForTodayFromDB().then(dbResponse => {
                    resolve(dbResponse);
                }).catch(errResponse => {
                    Private.getFromScrapperAndUpdate().then(response => resolve(response)).catch(err => reject(err));
                })
            });
    }));
};

module.exports.getAllCountryReportsForYesterday = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getAllReportForYesterdayFromCache()
            .then(cachedResponse => resolve(cachedResponse))
            .catch( cacheErrResponse => {
                covidScrapper.getAllReportsForYesterdayFromScrapper()
                    .then(scrappedResponse => {
                        return cacheService.save(scrappedResponse.data, cacheService.cacheKeys.ALL_COVID_DATA_YESTERDAY);
                    }).then(successResponse => resolve(successResponse))
                    .catch(errResponse => reject(errResponse));
            });
    }));
};

module.exports.getCovidSummaryForToday = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getSummaryForTodayFromCache().then(resposne => {
            resolve(resposne);
        }).catch(errResp => {
            covidScrapper.getSummaryForTodayFromScrapper().then(scrappedResponse => {
                cacheService.save(scrappedResponse.data, cacheService.cacheKeys.COVID_SUMMARY_TODAY);
                resolve(scrappedResponse);
            }).catch(errResp => resolve(errResp));
        });

    }))
};

module.exports.getCovidSummaryForYesterday = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getSummaryForYesterdayFromCache().then(resposne => {
            resolve(resposne);
        }).catch(errResp => {
            covidScrapper.getSummaryForYesterdayFromScrapper().then(scrappedResponse => {
                cacheService.save(scrappedResponse.data, cacheService.cacheKeys.COVID_SUMMARY_YESTERDAY);
                resolve(scrappedResponse);
            }).catch(errResp => resolve(errResp));
        });
    }))
};

module.exports.getReportByCountryForToday = (countryName) => {
    return new Promise(((resolve, reject) => {
        cacheService.getReportByCountryForTodayFromCache(countryName)
            .then(dataResposne => resolve(dataResposne))
            .catch(errResponse => {
                covidScrapper.getReportByCountryFroTodayFromScrapper(countryName)
                    .then(dataResponse => {
                        return cacheService.save(dataResponse.data, dataResponse.data.country_name);
                    }).then(successResp => resolve(successResp))
                    .catch(errResp => reject(errResp));
            })
    }));
};

module.exports.getReportByCountryForYesterday = (countryName) => {
    return new Promise(((resolve, reject) => {
        let suffix = '_yesterday';
        cacheService.getReportByCountryForYesterdayFromCache(countryName)
            .then(dataResposne => resolve(dataResposne))
            .catch(errResponse => {
                covidScrapper.getReportByCountryForYesterdayFromScrapper(countryName)
                    .then(dataResponse => {
                        let key = dataResponse.data.country_name+suffix;
                        return cacheService.save(dataResponse.data, key);
                    }).then(successResp => resolve(successResp))
                    .catch(errResp => reject(errResp));
            })
    }));
};
