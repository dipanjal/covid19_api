const mongoose = require('mongoose');
const collectionName = require('../../configuration/DBConfig').Collections.COLL_DAILY_REPORTS;
const Schema = mongoose.Schema;

let covidDailyReportSchema = new Schema({
    // _id: Schema.ObjectId,
    _data: [{
        country_name: String,
        total_cases: String,
        new_cases: String,
        total_death: String,
        new_death: String,
        total_recovered: String,
        active_cases: String,
        critical_cases: String,
        tot_cases_per_million: String,
        tot_death_per_million: String,
    }]
},{timestamps: true});
covidDailyReportSchema.index({_id: -1},{createdAt: -1});

module.exports = DailyReportModel = mongoose.model(collectionName, covidDailyReportSchema, true);

DailyReportModel.on('index', (err, data) => {
    console.log(data);
});

