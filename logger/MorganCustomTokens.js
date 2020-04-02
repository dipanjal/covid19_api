const morgan = require('morgan');
const ipware = require('ipware')();

morgan.token('host', function(req, res) {
    let ip_info =  ipware.get_ip(req);
    return ipware.is_loopback_ip(ip_info.clientIp) ?
        Private.getLoopBackIp(req) : ip_info.clientIp;
});

morgan.token('param', function(req, res, param) {
    return req.params[param];
});

let Private = {
    getLoopBackIp : req => {
        let lookbackIp = '127.0.0.1';
        req['clientIp'] = lookbackIp;
        return lookbackIp;
    }
}