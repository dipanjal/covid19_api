const router = require('express').Router();

router.get('/favicon.ico', (req,res) => res.status(200));
router.use('/', require('./APIRouter'));

module.exports = router;
