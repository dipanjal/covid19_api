const ipWare = require('ipware')();

const covidService = require('../service/CovidService');
const removeFBCLID = require('../helpers/UrlHelper').removeFBCLID;
module.exports.countHit = (req, res, next) => {
    let ipInfo =  ipWare.get_ip(req);
    if(req.originalUrl && !ipWare.is_loopback_ip(ipInfo.clientIp)){
        let urlSanitized = removeFBCLID(req.originalUrl);
        covidService.saveHits(urlSanitized);
    }
    next();
};