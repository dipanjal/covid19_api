const router = require('express').Router();
const covidApi = require('../handlers/CovidRequestHandler');

router.get('/',(req,res)=> covidApi.getAllForToday(res, res) );
router.get('/yesterday',(req,res)=> covidApi.getAllForYesterday(res, res) );

router.get('/summary',(req,res)=> covidApi.getSummaryForToday(res, res));
router.get('/yesterday/summary',(req,res)=> covidApi.getSummaryForYesterday(res, res));

router.get('/countries', covidApi.getAvailableCountries);
router.get('/history', covidApi.getCovidHistory);

router.get('/forceUpdate', covidApi.forceUpdateToday);

router.post('/search', covidApi.searchReports);

/**
 * put these path variable type routes at the end,
 * otherwise it will map other router urls with the path variable
 * ex: /history
 */
router.get('/:country', (req, res) => covidApi.getByCountryNameForToday(req,res));
router.get('/yesterday/:country', (req, res) => covidApi.getByCountryNameForYesterday(req,res));





module.exports = router;
