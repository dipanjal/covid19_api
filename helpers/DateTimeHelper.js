const moment = require('moment');
const dbSettings = require('../configuration/AppSettings').DBSettings;

module.exports.getStartOfTodayAsDate = () => {
    return moment().startOf('day').toDate();
};

module.exports.getEndOfTodayAsDate = () => {
    return moment().endOf('day').toDate();
};

module.exports.getMaxTTLForDB = () => {
    return moment().subtract(dbSettings.maxTTL, dbSettings.unitOfTime).toDate();
};

module.exports.getDateFromString = (dateString) => {
    return moment(dateString).toDate();
}

module.exports.isDBDataAlive = (updatedAt) => {
    return moment().diff(moment(updatedAt), dbSettings.unitOfTime) <= dbSettings.maxTTL;
};