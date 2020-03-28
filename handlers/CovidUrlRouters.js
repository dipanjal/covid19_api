const router = require('express').Router();
const covidApi = require('./CovidRequestHandler');

router.get('/',(req,res)=> covidApi.getAll(res, res) );
router.get('/summary',(req,res)=> covidApi.getSummary(res, res));
router.get('/:country', (req, res) => covidApi.getByCountryName(req,res));



module.exports = router;