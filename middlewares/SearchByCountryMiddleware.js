const apiResponse = require('../models/ApiStatus');
const covidService = require('../service/CovidService');
const modelConverter = require('../helpers/ModelConverter');

module.exports.isCountryAvailable = (req,res, next) => {
    covidService.getAvailableCountries().then(response => {
        if(!modelConverter.isEmptyArray(response.data)){
            let countryName = req.params.country.toLowerCase();
            if(response.data.find(val => val === countryName)){
                next();
            }else{
                apiResponse.RECORD_NOT_FOUND.data = response.data;
                apiResponse.createResponse(apiResponse.RECORD_NOT_FOUND, res);
            }
        }
    }).catch( errResponse => apiResponse.createResponse(errResponse, res));
};