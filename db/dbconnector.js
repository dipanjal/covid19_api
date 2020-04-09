const mongoose = require('mongoose');

const dbConfig = require('../configuration/DBConfig').MongoConfig;
module.exports.connectToMongo = () => {
    mongoose.connect(dbConfig.uri, dbConfig.options)
        .then( () => {
            console.log('mongo atlas is connected (^_^)');
        })
        .catch(err => {
            console.log(err);
        });
};