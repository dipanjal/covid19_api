const router = require('express').Router();

// router.get('/', (req,res) => res.status(200).json({code:200, url: '/api/covid'}));
// router.use('/api', require('./APIRouter'));
router.use('/', require('./APIRouter'));

module.exports = router;