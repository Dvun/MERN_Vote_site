const express = require('express')
const router = express.Router()
const {getAllStatistics, getCurrentStatistic} = require('../controllers/statisticController')

router.get('/statistics', getAllStatistics)
router.get(`/statistics/:id`, getCurrentStatistic)

module.exports = router