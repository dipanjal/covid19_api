module.exports.SUCCESS = {
    code:200,
    message:"OK",
    data:null
};

module.exports.INTERNAL_SERVER_ERROR = {
    code:500,
    message:"Internal server Error",
    data:null
};

module.exports.RECORD_NOT_FOUND = {
    code:404,
    message:"record not found",
    data:null
};

module.exports.REMOTE_ERROR = {
    code:400,
    message:"Remote Server Error",
    data:null
};

let additionalInfo = {
    message: "this api is still in progress, we are trying so hard to give our best",
    endpoints:[
        {url: "/", method: "GET", message: "get all report for today"},
        {url: "/yesterday", method: "GET", message: "get all report for yesterday"},
        {url: "/summary", method: "GET", message: "get total summary report for today"},
        {url: "/yesterday/summary", method: "GET", message: "get total summary report for yesterday"},
        {url: "/countries", method: "GET", message: "get all available country names"},
        {url: "/{country}", method: "GET", message: "get today report for a country, ex: /uk"},
        {url: "/yesterday/{country}", method: "GET", message: "get yesterday report for a country, ex: /usa"},
        {url: "/history", method: "GET", message: "get historical data"},
        {url: "/search", method: "POST", body:{fromDate:"05-04-2020", toDate:"08-04-2020"}, message: "get historical data"},
    ]
};

module.exports.createResponse = (dataResponse, res) => {
    dataResponse.others = additionalInfo;
    res.status(dataResponse.code).json(dataResponse);
};