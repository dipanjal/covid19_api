const express = require('express'), bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const port = require('./configuration/AppSettings').APPLICATION_PORT;
const morgan = require('morgan');
const morgarTokens = require('./logger/MorganCustomTokens');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Enabling CORS FOR ALL
 */
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

/**
 * registering morgan logger
 */
app.use(morgan(':host :method :url :status - :response-time ms'));

app.use(require('./routers/BaseRouter'));
server.listen(port, () => console.log(`listening: ${port}`));
