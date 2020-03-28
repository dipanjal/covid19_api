const morgan = require('morgan');

morgan.token('host', function(req, res) {
    return req.hostname;
});

morgan.token('param', function(req, res, param) {
    return req.params[param];
});