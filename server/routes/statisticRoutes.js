const express = require('express')
const router = express.Router()
const {getAllStatistics, getCurrentStatistic} = require('../controllers/statisticController')

router.get('/api/statistics', getAllStatistics)
router.get(`/api/statistics/:id`, getCurrentStatistic)

module.exports = router