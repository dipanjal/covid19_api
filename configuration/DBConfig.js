const DB_NAME = 'covid19_db';
module.exports.MongoConfig = {
    username: 'covidDB',
    password: 'r00t@CovidDB',
    uri: `mongodb+srv://covidDB:r00t%40CovidDB@covidcluster0-j26ii.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000,
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    },
    createDb: true
};

module.exports.Collections = {
    COLL_DAILY_REPORTS: `daily_reports`,
    COLL_COUNTRIES: 'countries',
    COLL_HIT_COUNTER: 'hit_counter'
};

