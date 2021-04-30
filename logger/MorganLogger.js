const morgan = require('morgan');
const ipware = require('ipware')();
const geoip = require('geoip-lite');
const moment = require('moment-timezone');

morgan.token('host', function(req, _) {
    return Private.getRealIp(req);
});

morgan.token('geo-loc', function(req, _) {
    return Private.getGeoIpLocation(req);
});

morgan.token('param', function(req, _, param) {
    return req.params[param];
});

morgan.token('request_at_time', function(_, _, _) {
    return moment().tz('Asia/Dhaka').format('DD-MM-YYYY hh:mm:ss A Z');
});

let Private = {
    getRealIp: req => {
        let ip_info =  ipware.get_ip(req);
        return ipware.is_loopback_ip(ip_info.clientIp) ?
            Private.getLoopBackIp(req) : ip_info.clientIp;
    },
    getLoopBackIp : req => {
        let lookBackIp = '127.0.0.1';
        req['clientIp'] = lookBackIp;
        return lookBackIp;
    },
    getGeoIpLocation: req => {
        let ip = req.clientIp || Private.getRealIp(req);
        let geoInfo = geoip.lookup(ip);
        // return JSON.stringify(geoInfo, null, 6)
        return geoInfo ? `${geoInfo.country}-${geoInfo.region}, ${geoInfo.city}, [${geoInfo.ll[0]}, ${geoInfo.ll[1]}]` : '';
    },

};

module.exports.logFormat = JSON.stringify({
    method: ':method',
    url: ':url',
    status: ':status',
    response_time: ':response-time ms',
    ip: ':host',
    location: ':geo-loc',
    requested_at: ':request_at_time'
}, null, 4);