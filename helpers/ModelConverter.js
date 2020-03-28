let covidModel = require('../models/CovidReportModel'),
    covidCacheModel = require('../models/CovidReportCacheModel');

module.exports.isEmpty = obj => {
    return obj ? Object.keys(obj).length === 0 : true;
};

module.exports.cacheModelsToDataModels = cacheModelList => {
    return this.isEmpty(cacheModelList) ? null : cacheModelList.map(cacheModel => {
        return cacheModel.val;
    });
};

module.exports.DataModelsToCacheModels = (key, dataModels) => {
    return this.isEmpty(dataModels) ? null : {
        key: key,
        val: dataModels
    }
};
