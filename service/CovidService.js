let covidScrapper = require('./CovidScrapper');
let cacheService = require('./CovidCacheService');
let modelConverter = require('../helpers/ModelConverter');
let apiStatus = require('../models/ApiStatus');

module.exports.getAllCountryReportsForToday = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getAllReportForTodayFromCache()
            .then(cachedResponse => resolve(cachedResponse))
            .catch( cacheErrResponse => {
                covidScrapper.getAllReportsForTodayFromScrapper()
                    .then(scrappedResponse => {
                        return cacheService.save(scrappedResponse.data, cacheService.cacheKeys.ALL_COVID_DATA_TODAY);
                    }).then(successResponse => resolve(successResponse))
                    .catch(errResponse => reject(errResponse));
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

module.exports.getReportByCountry = (countryName) => {
    return new Promise(((resolve, reject) => {
        cacheService.getByCountryFromCache(countryName)
            .then(dataResposne => resolve(dataResposne))
            .catch(errResponse => {
                covidScrapper.getReportByCountryFromScrapper(countryName)
                    .then(dataResponse => {
                        return cacheService.save(dataResponse.data, dataResponse.data.country_name);
                    }).then(successResp => resolve(successResp))
                    .catch(errResp => reject(errResp));
            })
    }));
};
