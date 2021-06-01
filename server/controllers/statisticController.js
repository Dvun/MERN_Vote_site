const Statistic = require('../models/statisticModel')
const {responseSend} = require('../utils/responseSend')

module.exports = {

  getAllStatistics: async (req, res) => {
    try {
      const statistics = await Statistic.find()
      res.status(200).json(statistics)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  getCurrentStatistic: async (req, res) => {
    try {
      const statistic = await Statistic.findById(req.params.id)
      res.status(200).json(statistic)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

}