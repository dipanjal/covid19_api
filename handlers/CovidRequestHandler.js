let apiResponse = require('../models/ApiStatus');
let covidHelper = require('../service/CovidScrapper');
let covidService = require('../service/CovidService');



module.exports.getAll = (req, res) => {
    covidService.getAllCountryCovidReportsByUrl()
        .then(covidReportsResp => apiResponse.createResponse2(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getSummary = (req, res) => {
    covidService.getCovidReportSummary()
        .then(covidSummaryResp => apiResponse.createResponse2(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getByCountryName = (req, res) => {
    covidService.getReportByCountry(req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse2(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};
