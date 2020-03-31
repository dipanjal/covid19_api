let covidScrapper = require('./CovidScrapper');
let cacheService = require('./CovidCacheService');
let modelConverter = require('../helpers/ModelConverter');
let apiStatus = require('../models/ApiStatus');

module.exports.getAllCountryCovidReportsByUrl = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getAllFromCache()
            .then(cachedResponse => resolve(cachedResponse))
            .catch( cacheErrResponse => {
                covidScrapper.getAllReportsForToday()
                    .then(scrappedResponse => {
                        return cacheService.save(scrappedResponse.data);
                    }).then(successResponse => resolve(successResponse))
                    .catch(errResponse => reject(errResponse));
            });
    }));
};
module.exports.getCovidReportSummary = () => {
    return new Promise(((resolve, reject) => {
        cacheService.getSummaryFromCache().then(resposne => {
            resolve(resposne);
        }).catch(errResp => {
            covidScrapper.getCovidReportSummary().then(scrappedResponse => {
                cacheService.save(scrappedResponse.data, cacheService.cacheKeys.COVID_SUMMARY);
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
                covidScrapper.getReportByCountry(countryName)
                    .then(dataResponse => {
                        return cacheService.save(dataResponse.data, dataResponse.data.country_name);
                    }).then(successResp => resolve(successResp))
                    .catch(errResp => reject(errResp));
            })
    }));
};
