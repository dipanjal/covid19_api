const mongoose = require('mongoose');

const dbConfig = require('../configuration/DBConfig').MongoConfig;
module.exports.connectToMongo = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(dbConfig.uri, dbConfig.options)
            .then( () => {
                console.log('mongo atlas is connected (^_^)');
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject(err)
            });
    });
};