const router = require('express').Router();
// router.get('/', (req,res) => res.status(200).json({code:200, url: '/covid'}));
router.use('/', require('./CovidUrlRouters'));
module.exports = router;
