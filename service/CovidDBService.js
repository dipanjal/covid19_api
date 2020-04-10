const mongoose = require('mongoose');
const dateHelper = require('../helpers/DateTimeHelper');

const CovidReportSchema = require('../db/schema/DailyReportsSchema');
const apiResponse = require('../models/ApiStatus');
const modelConverter = require('../helpers/ModelConverter');

let MESSAGE_PROPERTIES = {
    DB_ERROR : 'something is wrong in db',
    RECORD_NOT_FOUND_IN_DB: 'no item found in db'
};

let Private = {
    /**
     * by default it returns for today
     * @param queryBlock
     */
    findLatestReportByQuery: (queryBlock) => {
        return new Promise((resolve, reject) => {
            queryBlock = queryBlock || {
                createdAt : { $gte: dateHelper.getStartOfTodayAsDate(), $lte: dateHelper.getEndOfTodayAsDate()}
            };

            CovidReportSchema.findOne()
                .where(queryBlock).sort({ createdAt: -1 })
                .then(result => {
                    resolve(result)
                }).catch(err => reject(err));
        });
    },
    findLatestIfUpdateAble: (date) => {
        return new Promise((resolve, reject) => {
            let queryBlock;
            if(date){
                queryBlock = {
                    createdAt : { $gte: dateHelper.getStartOfDate(date), $lte: dateHelper.getEndOfDate(date)},
                    updatedAt : {$lte: dateHelper.getMaxTTLForDB(date)}
                };
            }else{
                queryBlock = {
                    createdAt : { $gte: dateHelper.getStartOfTodayAsDate(), $lte: dateHelper.getEndOfTodayAsDate()},
                    updatedAt : {$lte: dateHelper.getMaxTTLForDB()}
                }
            }
            Private.findLatestReportByQuery(queryBlock)
                .then(result => {resolve(result || null)})
                .catch(err => reject(err))
        });
    },

    findLatestReport: (date) => {
        return new Promise((resolve, reject) => {
            let queryBlock = date ? {
                    createdAt : { $gte: dateHelper.getStartOfDate(date), $lte: dateHelper.getEndOfDate(date)}
                } : null;

            Private.findLatestReportByQuery(queryBlock).then(result => resolve(result)).catch(err => reject(err));

            /*CovidReportSchema.findOne()
                .where(queryBlock).sort({ createdAt: -1 })
                .then(result => resolve(result))
                .catch(err => reject(err));*/
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
            let searchQuery = Private.buildSearchQueryFromPayloads(payloads);
            CovidReportSchema.find()
                .where(searchQuery).sort({ createdAt: 1 })
                .then(resultFromDB => {
                    return modelConverter.fromMongoListToCovidViewModelList(resultFromDB);
                }).then(viewAbleList => {
                apiResponse.SUCCESS.data = viewAbleList;
                resolve(apiResponse.SUCCESS);
            }).catch(err =>{
                apiResponse.INTERNAL_SERVER_ERROR.message = err.message || apiResponse.INTERNAL_SERVER_ERROR.message;
                reject(apiResponse.INTERNAL_SERVER_ERROR);
            });
        });
    },
    getAllFromDB: () => {
        return new Promise((resolve, reject) => {
            CovidReportSchema.find().sort({createdAt: -1}).then(dataList => {
                if(modelConverter.isEmptyArray(dataList)){
                    resolve(apiResponse.RECORD_NOT_FOUND);
                }else{
                    return modelConverter.fromMongoListToCovidViewModelList(dataList);
                }
            }).then(listOfViewableData => {
                apiResponse.SUCCESS.data = listOfViewableData;
                resolve(apiResponse.SUCCESS);
            }).catch( err => {
                apiResponse.INTERNAL_SERVER_ERROR.message = err.message || apiResponse.INTERNAL_SERVER_ERROR.message;
                reject(apiResponse.INTERNAL_SERVER_ERROR);
            })
        });
    }
};

module.exports.getReportForTodayFromDB = () => {
    return new Promise((resolve, reject) => {
        console.log('fetching from db');
        Private.findLatestReportByQuery().then(result => {
            if(result){
                if(dateHelper.isDBDataAlive(result.updatedAt)){
                    console.log("fetching reports from db");
                    apiResponse.SUCCESS.data = modelConverter.convertFromMongoModelToCovidReportViewModel(result._data);
                    resolve(apiResponse.SUCCESS);
                }else
                    reject(apiResponse.RECORD_NOT_FOUND);
            }else
                reject(apiResponse.RECORD_NOT_FOUND);
        }).catch(err => {
            apiResponse.INTERNAL_SERVER_ERROR.message = MESSAGE_PROPERTIES.DB_ERROR;
            reject(apiResponse.INTERNAL_SERVER_ERROR);
        });
    })
};

module.exports.getReportByDateFromDB = (dateFrom, dateTo) => {
    return new Promise((resolve, reject) => {
        let queryBlock = {
            createdAt : { $gte: dateHelper.getDateFromString(dateFrom), $lte: dateHelper.getDateFromString(dateTo)}
        };
        CovidReportSchema.find()
            .where(queryBlock).sort({ createdAt: -1 })
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
};

module.exports.saveReportsInDB = (covidReportData, date) => {
    return new Promise((resolve, reject) => {
        Private.findLatestReport(date).then(result => {
            apiResponse.SUCCESS.data = covidReportData;
            apiResponse.INTERNAL_SERVER_ERROR.message = MESSAGE_PROPERTIES.DB_ERROR;
            if(!result){
                new CovidReportSchema({_data: covidReportData}).save().then(result =>{
                    resolve(apiResponse.SUCCESS);
                    console.log('new report inserted in DB');
                }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));
            }else if(!dateHelper.isDBDataAlive(result.updatedAt)){
                result._data = covidReportData;
                console.log("updating db....");
                result.save().then(resultUpdated => {
                    resolve(apiResponse.SUCCESS);
                    console.log(`report was last updated at ${result.updatedAt}`);
                    console.log(`report updated at ${resultUpdated.updatedAt}`);
                }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));
            }else{
                resolve(apiResponse.SUCCESS);
                console.log("nothing to be updated in DB");
            }
        }).catch(err => reject(apiResponse.INTERNAL_SERVER_ERROR));

        /*Private.findLatestIfUpdateAble(date).then(result => {
            if(result){
                let lastUpdatedAt = result.updatedAt;
                result._data = covidReportData;
                result.save().then(result =>{
                    resolve(covidReportData);
                    console.log(`report was last updated at ${lastUpdatedAt}`);
                    console.log(`report updated at ${result.updatedAt}`);
                }).catch(err => reject(err));
            }else{
                Private.findLatestReport(date).then(result=> {
                    if(!result){
                        new CovidReportSchema({_data: covidReportData}).save().then(result =>{
                            resolve(covidReportData);
                            console.log('new report inserted in DB');
                        }).catch(err => reject(err));
                    }else{
                        console.log('nothing to be updated in DB');
                        resolve(covidReportData);
                    }
                })
            }
        }).catch(err => reject(err));*/
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
}
