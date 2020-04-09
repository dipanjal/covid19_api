const dateTimeHelper = require('../helpers/DateTimeHelper');
const Private = {
    isSingleObject: (obj) => {
        return obj instanceof Object && !Array.isArray(Object);
    },
    isArray: (obj) => Array.isArray(obj),
    isSingleObjectArray: (obj) => Array.isArray(obj) && obj.length === 1,
    mapMongoCovidReportListToViewableList: (mongoList) => {
        return mongoList.map(mongoModel => {
            return {
                country_name: mongoModel.country_name,
                total_cases: mongoModel.total_cases,
                new_cases: mongoModel.new_cases,
                total_death: mongoModel.total_death,
                new_death: mongoModel.new_death,
                total_recovered: mongoModel.total_recovered,
                active_cases: mongoModel.active_cases,
                critical_cases: mongoModel.critical_cases,
                total_cases_per_million: mongoModel.total_cases_per_million,
                total_death_per_million: mongoModel.total_death_per_million
            };
        });
    }
};

module.exports.isEmpty = obj => {
    return obj ? Object.keys(obj).length === 0 : true;
};

module.exports.isEmptyString = string => {
    return !(string && string.length > 0);
};

module.exports.isEmptyArray = array => {
    return array ? array.length === 0 : false;
};

/*module.exports.cacheModelsToDataModels = cacheModelList => {
    return this.isEmpty(cacheModelList) ? null : cacheModelList.map(cacheModel => {
        return cacheModel.val;
    });
};*/

/*module.exports.DataModelsToCacheModels = (key, dataModels) => {
    return this.isEmpty(dataModels) ? null : {
        key: key,
        val: dataModels
    }
};*/
/**
 *
 * @param dataFromMongo -> always pass dataFromMongo._data
 */
module.exports.convertFromMongoModelToCovidReportViewModel = (dataFromMongo) => {
    if(this.isEmpty(dataFromMongo)) return null;
    else if(Private.isArray(dataFromMongo)){
        return Private.mapMongoCovidReportListToViewableList(dataFromMongo);
    }else if(Private.isSingleObjectArray(dataFromMongo)){
        delete dataFromMongo[0]._id;
        return dataFromMongo;
    }
    else if (Private.isSingleObject(dataFromMongo)) {
        delete dataFromMongo._id;
        return dataFromMongo;
    }
    return null;
};

module.exports.fromMongoListToCovidViewModelList = (mongoDataList) => {
    return new Promise((resolve, reject) => {
        if(Private.isArray(mongoDataList) && !this.isEmptyArray(mongoDataList)){
            let viewableDataArray = [];
            mongoDataList.forEach( (element, index) => {
                let viewableData = {
                    date: dateTimeHelper.getStringFromTimestamp(element.createdAt, dateTimeHelper.formats.DD_MM_YYYY),
                    data: this.convertFromMongoModelToCovidReportViewModel(element._data)
                };
                viewableDataArray.push(viewableData);
                if(index === mongoDataList.length - 1)
                    resolve(viewableDataArray);
            })
        }else{
            reject({message: "no record found"});
        }
    });

};
