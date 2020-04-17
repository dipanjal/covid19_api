const covidService = require('../service/CovidService');
module.exports.countHit = (req, res, next) => {
    covidService.saveHits(req.originalUrl);
    next();
};