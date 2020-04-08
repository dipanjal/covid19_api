

let apiResponse = require('../models/ApiStatus');
let covidHelper = require('../service/CovidScrapper');
let covidService = require('../service/CovidService');



module.exports.getAllForToday = (req, res) => {
    covidService.getAllCountryReportsForToday()
        .then(covidReportsResp => apiResponse.createResponse2(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getAllForYesterday = (req, res) => {
    covidService.getAllCountryReportsForYesterday()
        .then(covidReportsResp => apiResponse.createResponse2(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getSummaryForToday = (req, res) => {
    covidService.getCovidSummaryForToday()
        .then(covidSummaryResp => apiResponse.createResponse2(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};


module.exports.getSummaryForYesterday = (req, res) => {
    covidService.getCovidSummaryForYesterday()
        .then(covidSummaryResp => apiResponse.createResponse2(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getByCountryNameForToday = (req, res) => {
    covidService.getReportByCountryForToday(req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse2(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getByCountryNameForYesterday = (req, res) => {
    covidService.getReportByCountryForYesterday(req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse2(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.searchReports = (req, res) => {
    covidService.searchReports(req.body)
        .then(response => apiResponse.createResponse2(response, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};

module.exports.getCovidHistory = (req, res) => {
    covidService.getCovidHistory()
        .then(response => apiResponse.createResponse2(response, res))
        .catch(errResponse => apiResponse.createResponse2(errResponse, res));
};
