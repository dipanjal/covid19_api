let apiResponse = require('../models/ApiStatus');
let covidHelper = require('../service/CovidScrapper');
let covidService = require('../service/CovidService');

let requestUrl = 'https://www.worldometers.info/coronavirus/'

module.exports.getAll = (req, res) => {
    covidService.getAllCountryCovidReportsByUrl(requestUrl)
        .then(covidReportsResp => apiResponse.createResponse2(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getSummary = (req, res) => {
    covidService.getCovidReportSummary(requestUrl)
        .then(covidSummaryResp => apiResponse.createResponse2(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getByCountryName = (req, res) => {
    covidService.getReportByCountry(requestUrl, req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse2(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};