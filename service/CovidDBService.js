const mongoose = require('mongoose');
const dateHelper = require('../helpers/DateTimeHelper');
// const moment = require('moment');

const CovidReportSchema = require('../db/schema/DailyReportsSchema');
const dbSettings = require('../configuration/AppSettings').DBSettings;
const apiResponse = require('../models/ApiStatus');

let MESSAGE_PROPERTIES = {
    DB_ERROR : 'something is wrong in db',
    RECORD_NOT_FOUND_IN_DB: 'no item found in db'
};

let Private = {
    findLatestReportForToday: (queryBlock) => {
        return new Promise((resolve, reject) => {

            queryBlock = queryBlock || {
                createdAt : { $gte: dateHelper.getStartOfTodayAsDate(), $lte: dateHelper.getEndOfTodayAsDate()}
            };

            CovidReportSchema.findOne()
                .where(queryBlock).sort({ createdAt: -1 })
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    },
    findLatestIfUpdateable: () => {
        return new Promise((resolve, reject) => {
            let queryBlock = {
                createdAt : { $gte: dateHelper.getStartOfTodayAsDate(), $lte: dateHelper.getEndOfTodayAsDate()},
                updatedAt : {$lte: dateHelper.getMaxTTLForDB()}
            };
            Private.findLatestReportForToday(queryBlock).then(result => {
                resolve(result ? result : null);
            }).catch(err => reject(err))
        });
    }
};

module.exports.getReportForTodayFromDB = () => {
    return new Promise((resolve, reject) => {
        console.log('fetching from db');
        Private.findLatestReportForToday().then(result => {
            if(result){
                if(dateHelper.isDBDataAlive(result.updatedAt)){
                    console.log("fetching from db");
                    apiResponse.SUCCESS.data = result._data;
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

module.exports.saveReportsInDB = (covidReportData) => {
    return new Promise((resolve, reject) => {
        Private.findLatestIfUpdateable().then(result => {
            if(result){
                let lastUpdatedAt = result.updatedAt;
                result._data = covidReportData;
                result.save().then(result =>{
                    resolve(covidReportData);
                    console.log(`report was last updated at ${lastUpdatedAt}`);
                    console.log(`report updated at ${result.updatedAt}`);
                }).catch(err => reject(err));
            }else{
                Private.findLatestReportForToday().then(result=> {
                    if(!result){
                        new CovidReportSchema({_data: covidReportData}).save().then(result =>{
                            resolve(covidReportData);
                            console.log('new report inserted');
                        }).catch(err => reject(err));
                    }else{
                        console.log('nothing to be updated');
                        resolve(covidReportData);
                    }
                })

            }
        }).catch(err => reject(err));
    });
};