const router = require('express').Router();
const countHit = require('../middlewares/hitCounterMiddleware').countHit;
router.use('/', countHit, require('./CovidUrlRouters'));
module.exports = router;
