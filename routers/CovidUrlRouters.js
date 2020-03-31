const router = require('express').Router();
const covidApi = require('../handlers/CovidRequestHandler');

router.get('/',(req,res)=> covidApi.getAllForToday(res, res) );
router.get('/yesterday',(req,res)=> covidApi.getAllForYesterday(res, res) );

router.get('/summary',(req,res)=> covidApi.getSummaryForToday(res, res));
router.get('/yesterday/summary',(req,res)=> covidApi.getSummaryForYesterday(res, res));

router.get('/:country', (req, res) => covidApi.getByCountryName(req,res));



module.exports = router;
