const express = require('express');
const router = express.Router();
const data = require('../models/data')
/* GET home page. */
router.get('/data/message', data.getMessage);
router.get('/data/notification', data.getNotification);
router.get('/data/performance', data.getPerformance);
router.get('/data/performancebyyear', data.getPerformancebyYear);
router.get('/data/performancebyyear/chart', data.getPerformancebyYearforChart);

router.post('/data/message', data.saveMessage)
router.post('/data/notification', data.saveNotification)
router.post('/data/performance', data.savePerformance)

module.exports = router;
