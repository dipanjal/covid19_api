let apiResponse = require('../models/ApiStatus');
let covidService = require('../service/CovidService');

module.exports.getAllForToday = (req, res) => {
    covidService.getAllCountryReportsForToday()
        .then(covidReportsResp => apiResponse.createResponse(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getAllForYesterday = (req, res) => {
    covidService.getAllCountryReportsForYesterday()
        .then(covidReportsResp => apiResponse.createResponse(covidReportsResp, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getSummaryForToday = (req, res) => {
    covidService.getCovidSummaryForToday()
        .then(covidSummaryResp => apiResponse.createResponse(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};


module.exports.getSummaryForYesterday = (req, res) => {
    covidService.getCovidSummaryForYesterday()
        .then(covidSummaryResp => apiResponse.createResponse(covidSummaryResp, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getByCountryNameForToday = (req, res) => {
    covidService.getReportByCountryForToday(req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getByCountryNameForYesterday = (req, res) => {
    covidService.getReportByCountryForYesterday(req.params.country.toLowerCase())
        .then(dataResponse => apiResponse.createResponse(dataResponse, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.searchReports = (req, res) => {
    covidService.searchReports(req.body)
        .then(response => apiResponse.createResponse(response, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getCovidHistory = (req, res) => {
    covidService.getCovidHistory()
        .then(response => apiResponse.createResponse(response, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.getAvailableCountries = (req, res) => {
    covidService.getAvailableCountries()
        .then(response => apiResponse.createResponse(response, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};

module.exports.forceUpdateToday = (req, res) => {
    covidService.forceUpdateToday()
        .then(response => apiResponse.createResponse(response, res))
        .catch(errResponse => apiResponse.createResponse(errResponse, res));
};