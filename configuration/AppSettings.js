let hour = 1;
let ttl = 60 * 60 * hour;
module.exports.CacheSettings = {
    stdTTL: ttl,
    ttl:ttl,
    checkperiod: ttl * 0.2 ,

};

module.exports.APPLICATION_PORT = process.env.port || 5000;