const moment = require('moment');
const dbSettings = require('../configuration/AppSettings').DBSettings;

module.exports.formats = {
    DD_MM_YYYY: 'DD-MM-YYYY'
};

module.exports.getStartOfTodayAsDate = () => {
    return moment().startOf('day').toDate();
};

module.exports.getEndOfTodayAsDate = () => {
    return moment().endOf('day').toDate();
};

module.exports.getMaxTTLForDB = (date) => {
    let now = date ? moment() : moment(date);
    return now.subtract(dbSettings.maxTTL, dbSettings.unitOfTime).toDate();
};

module.exports.getYesterdayAsDate = () => {
    return moment().subtract(1, 'day').toDate();
};

module.exports.getStartOfDate = (dateString, dateFormat) => {
    return moment(dateString, dateFormat).startOf('day').toDate();
};

module.exports.getEndOfDate = (dateString, dateFormat) => {
    return moment(dateString, dateFormat).endOf('day').toDate();
};

module.exports.getDateFromString = (dateString) => {
    return new Date(dateString);
};

module.exports.getStringFromTimestamp = (timestamp, dateFormat) => {
    return moment(timestamp, dateFormat).toString();
};

module.exports.isDBDataAlive = (updatedAt) => {
    return moment().diff(moment(updatedAt), dbSettings.unitOfTime) <= dbSettings.maxTTL;
};