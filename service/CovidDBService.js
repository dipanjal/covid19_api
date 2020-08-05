const _ = require('mongoose');
const _ = require('lodash');
const dbSettings = require('../configuration/AppSettings').DBSettings;
const dateHelper = require('../helpers/DateTimeHelper');
const CovidReportSchema = require('../db/schema/DailyReportsSchema');
const TotalHitsSchema = require('../db/schema/TotalHits');
const apiResponse = require('../models/ApiStatus');
const modelConverter = require('../helpers/ModelConverter');

let MESSAGE_PROPERTIES = {
    DB_ERROR : 'something is wrong in db',
    RECORD_NOT_FOUND_IN_DB: 'no item found in db',
    DB_READONLY_ERROR: 'db is readonly',
    DB_FETCH_ERROR: 'db is readonly'
};

let Private = {
    /**
     * by default it returns for today
     * @param queryBlock
     */
    findLatestReportByQuery: (queryBlock) => {
        return new Promise((resolve, reject) => {
            if(!dbSettings.fetch_from_db){
                apiResponse.INVALID_ARGUMENT.message = MESSAGE_PROPERTIES.DB_FETCH_ERROR;
                reject(apiResponse.INVALID_ARGUMENT);
            }else{
                queryBlock = queryBlock || {
                    createdAt : { $gte: dateHelper.getStartOfTodayAsDate(), $lte: dateHelper.getEndOfTodayAsDate()}
                };
                CovidReportSchema.findOne()
                    .where(queryBlock).sort({ createdAt: -1 })
                    .then(result => resolve(result))
                    .catch(err => reject(err));
            }

        });
    },
    findLatestReport: (date) => {
        return new Promise((resolve, reject) => {
            let queryBlock = date ? {
                    createdAt : { $gte: dateHelper.getStartOfDate(date), $lte: dateHelper.getEndOfDate(date)}
                } : null;

            Private.findLatestReportByQuery(queryBlock).then(result => resolve(result)).catch(err => reject(err));
        });
    },
    buildSearchQueryFromPayloads : (payloads) => {
        let finalQuery = {
            createdAt : {$gte: null, $lte: null}
        };
        if(payloads.hasOwnProperty('fromDate')){
            finalQuery.createdAt.$gte = dateHelper.getStartOfDate(payloads.fromDate, dateHelper.formats.DD_MM_YYYY);
        }if(payloads.hasOwnProperty('toDate')){
            finalQuery.createdAt.$lte = dateHelper.getEndOfDate(payloads['toDate'], dateHelper.formats.DD_MM_YYYY);
        }
        return finalQuery;
    },
    findReportInDBByQuery : (payloads) => {
        return new Promise((resolve, reject) => {
            if(!dbSettings.fetch_from_db){
                apiResponse.INVALID_ARGUMENT.message = MESSAGE_PROPERTIES.DB_FETCH_ERROR;
                reject(apiResponse.INVALID_ARGUMENT);
            }else{
                let searchQuery = Private.buildSearchQueryFromPayloads(payloads);
                CovidReportSchema.find()
                    .where(searchQuery).sort({ createdAt: 1 })
                    .then(resultFromDB => {
                        return modelConverter.fromMongoCollectionToCovidViewModelList(resultFromDB);
                    }).then(viewAbleList => {
                    apiResponse.SUCCESS.data = viewAbleList;
                    resolve(apiResponse.SUCCESS);
                }).catch(err =>{
                    apiResponse.INTERNAL_SERVER_ERROR.message = err.message || apiResponse.INTERNAL_SERVER_ERROR.message;
                    reject(apiResponse.INTERNAL_SERVER_ERROR);
                });
            }
        });
    },
    getAllFromDB: () => {
        return new Promise((resolve, reject) => {
            if(!dbSettings.fetch_from_db){
                apiResponse.INVALID_ARGUMENT.message = MESSAGE_PROPERTIES.DB_FETCH_ERROR;
                reject(apiResponse.INVALID_ARGUMENT);
            }else{
                CovidReportSchema.find().sort({createdAt: -1}).then(dataList => {
                    if(modelConverter.isEmptyArray(dataList)){
                        resolve(apiResponse.RECORD_NOT_FOUND);
                    }else{
                        return modelConverter.fromMongoCollectionToCovidViewModelList(dataList);
                    }
                }).then(listOfViewableData => {
                    apiResponse.SUCCESS.data = listOfViewableData;
                    resolve(apiResponse.SUCCESS);
                }).catch( err => {
                    apiResponse.INTERNAL_SERVER_ERROR.message = err.message || apiResponse.INTERNAL_SERVER_ERROR.message;
                    reject(apiResponse.INTERNAL_SERVER_ERROR);
                })
            }
        });
    }
};

module.exports.getReportForTodayFromDB = () => {
    return new Promise((resolve, reject) => {
        if(!dbSettings.fetch_from_db){
            apiResponse.INVALID_ARGUMENT.message = MESSAGE_PROPERTIES.DB_FETCH_ERROR;
            reject(apiResponse.INVALID_ARGUMENT);
        }else{
            Private.findLatestReport().then(result => {
                if(result){
                    if(dateHelper.isDBDataAlive(result.updatedAt)){
                        console.log("fetched reports from DB");
                        apiResponse.SUCCESS.data = modelConverter.convertFromMongoModelToCovidReportViewModel(result._data);
                        resolve(apiResponse.SUCCESS);
                    }else
                        reject(apiResponse.RECORD_NOT_FOUND);
                }else
                    reject(apiResponse.RECORD_NOT_FOUND);
            }).catch(_ => {
                apiResponse.INTERNAL_SERVER_ERROR.message = MESSAGE_PROPERTIES.DB_ERROR;
                reject(apiResponse.INTERNAL_SERVER_ERROR);
            });
        }
    })
};

/*module.exports.getReportByDateFromDB = (dateFrom, dateTo) => {
    return new Promise((resolve, reject) => {
        let queryBlock = {
            createdAt : { $gte: dateHelper.getDateFromString(dateFrom), $lte: dateHelper.getDateFromString(dateTo)}
        };
        CovidReportSchema.find()
            .where(queryBlock).sort({ createdAt: -1 })
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
};*/

module.exports.saveReportsInDB = (covidReportData, date) => {
    return new Promise((resolve, reject) => {
        if(dbSettings.update_db){
            Private.findLatestReport(date).then(result => {
                apiResponse.SUCCESS.data = covidReportData;
                apiResponse.INTERNAL_SERVER_ERROR.message = MESSAGE_PROPERTIES.DB_ERROR;
                if(!result){
                    new CovidReportSchema({_data: covidReportData}).save().then(result =>{
                        console.log('new report inserted in DB');
                        resolve(apiResponse.SUCCESS);
                    }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));
                }else if(!dateHelper.isDBDataAlive(result.updatedAt)){
                    result._data = covidReportData;
                    console.log("updating DB....");
                    result.save().then(resultUpdated => {
                        resolve(apiResponse.SUCCESS);
                        console.log(`report DB was last updated at ${result.updatedAt}`);
                        console.log(`report DB updated at ${resultUpdated.updatedAt}`);
                    }).catch(_ => reject(apiResponse.INTERNAL_SERVER_ERROR));
                }else{
                    resolve(apiResponse.SUCCESS);
                    console.log("nothing to be updated in DB");
                }
            }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));
        }else{
            apiResponse.INVALID_ARGUMENT.message = MESSAGE_PROPERTIES.DB_READONLY_ERROR;
            reject(apiResponse.INVALID_ARGUMENT);
        }
    });
};

module.exports.saveReportsInDBForYesterday = (data) => {
    console.log("insert yesterday data in db");
    return this.saveReportsInDB(data, dateHelper.getYesterdayAsDate());
};

module.exports.searchReportInDB = (payloads) => {
    return Private.findReportInDBByQuery(payloads);
};

module.exports.getCovidHistoryFromDB = () =>  {
    return Private.getAllFromDB();
};

module.exports.getReportByCountryForTodayFromDB = (countryName) => {
    return new Promise((resolve, reject) => {
        Private.findLatestReport().then(resultFromDb => {
            let data = resultFromDb._data.filter(x=> x.country_name === countryName);
            if(_.isEmpty(data)){
                reject(apiResponse.RECORD_NOT_FOUND);
            }else{
                console.log("*** country loaded from db ***");
                apiResponse.SUCCESS.data = modelConverter.convertFromMongoModelToCovidReportViewModel(data);
                resolve(apiResponse.SUCCESS);
            }
        }).catch(errResponse => reject(errResponse))
    });
};

module.exports.forceUpdateDB = (data, dateString) => {
    return new Promise((resolve, reject) => {
        Private.findLatestReport(dateString).then(result => {
            if(!result){
                console.log("force: inserting new record in DB");
                return new CovidReportSchema({_data: data}).save();
            }else{
                console.log("force: updating in DB");
                console.log(`force: report DB was last updated at ${result.updatedAt}`);
                result._data = data;
                return result.save();
            }
        }).then(resultFromDB => {
            if(!_.isEmpty(resultFromDB)){
                apiResponse.SUCCESS.data = modelConverter.convertFromMongoModelToCovidReportViewModel(resultFromDB._data);
                resolve(apiResponse.SUCCESS.data);
                console.log(`report DB updated at ${resultFromDB.updatedAt}`);
            }
        }).catch(_ => reject(apiResponse.INTERNAL_SERVER_ERROR));
    });
};

let updateFetcherCount = (url, mongoSchema) => {
    let fetcher = mongoSchema._apis.filter(x=>x.url===url);
    if(_.isEmpty(fetcher)){
        mongoSchema._apis.push({
            url: url,
            hits: 1
        });
    }else{
        fetcher = fetcher.pop();
        TotalHitsSchema.findOneAndUpdate({'_apis.url': url}, {
            "$set": {
                "_apis.$.hits": fetcher.hits + 1
            }
        }).catch(err => console.log(err));
    }
}
module.exports.setHits = (url) => {
    return new Promise((resolve, reject) => {
        TotalHitsSchema.findOne().then(mongoSchema => {
            if(mongoSchema){
                if(url){
                    updateFetcherCount(url, mongoSchema);
                }
                mongoSchema.total_hits += 1;
                mongoSchema.save().then(resultUpdated => {
                    apiResponse.SUCCESS.data = resultUpdated;
                    resolve(apiResponse.SUCCESS);
                }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));
            }else{
                let dataObject = {
                    _apis: url ? [{url: url, hits: 1}] : [],
                    total_hits: 1
                };
                new TotalHitsSchema(dataObject).save().then(resultUpdated => {
                    apiResponse.SUCCESS.data = resultUpdated;
                    resolve(apiResponse.SUCCESS);
                }).catch(_ => reject(apiResponse.INTERNAL_SERVER_ERROR));
            }
        }).catch(_ => {
            apiResponse.INTERNAL_SERVER_ERROR.message = MESSAGE_PROPERTIES.DB_ERROR;
            resolve(apiResponse.INTERNAL_SERVER_ERROR);
        })
    });
};

module.exports.getTotalHits = () => {
    return new Promise((resolve, reject) => {
        TotalHitsSchema.findOne().then(data => {
            data._apis = _.sortBy(data._apis, 'hits').reverse();
            apiResponse.SUCCESS.data = data;
            resolve(apiResponse.SUCCESS);
        }).catch(err => {
            apiResponse.INTERNAL_SERVER_ERROR.message = err.message || MESSAGE_PROPERTIES.DB_ERROR;
            reject(apiResponse.INTERNAL_SERVER_ERROR);
        })
    })
};
