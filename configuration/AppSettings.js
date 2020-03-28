let hour = 2;
let ttl = 60 * 60 * hour;
module.exports.CacheSettings = {
    stdTTL: ttl,
    ttl:ttl,
    checkperiod: ttl * 0.2 ,

};