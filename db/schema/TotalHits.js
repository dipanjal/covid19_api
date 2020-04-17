const mongoose = require('mongoose');
const collectionName = require('../../configuration/DBConfig').Collections.COLL_HIT_COUNTER;
const Schema = mongoose.Schema;

let fetcherSchema = new Schema({
    url: String,
    hits:Number
});

let totalHitsSchema = new Schema({
    _apis:[fetcherSchema],
    total_hits:Number
},{timestamps: true});



module.exports = TotalHitsModel = mongoose.model(collectionName, totalHitsSchema, true);

