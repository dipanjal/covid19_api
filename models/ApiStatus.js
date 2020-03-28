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

module.exports.createErrorResponse = (err, res, responseType = this.RECORD_NOT_FOUND) => {
    responseType.message = err.message || responseType.message;
    this.createResponse(responseType, res, responseType);
};

module.exports.createResponse = (data, res, responseType) => {
    res.status(responseType.code).json(data);
};

module.exports.createResponse2 = (dataResponse, res) => {
    res.status(dataResponse.code).json(dataResponse);
};