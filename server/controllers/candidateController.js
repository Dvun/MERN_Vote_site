const Candidate = require('../models/candidateModel')
const {responseSend} = require('../utils/responseSend')


module.exports = {

  getAllCandidates: async (req, res) => {
    try {
      const candidates = await Candidate.find()
      res.status(200).json(candidates)
    } catch (e) {
      responseSend(res, 500, `Server Error!`)
    }
  },

  getCurrentCandidate: async (req, res) => {
    try {
      const candidate = await Candidate.findById(req.params.id)
      res.status(200).json(candidate)
    } catch (e) {
      responseSend(res, 500, `Server Error!`)
    }
  },

  createNewCandidate: async (req, res) => {
    try {
      const {fullName, email} = req.body
      const candidate = await Candidate.findOne({email})
      if (candidate) return responseSend(res, 404, `Candidate with email ${email} already registered!`)
      const newCandidate = {
        name: fullName,
        email,
      }
      await Candidate.create(newCandidate)
      responseSend(res, 200, `Candidate registered!`)
    } catch (e) {
      responseSend(res, 500, `Server Error!`)
    }
  },

  updateCandidate: async (req, res) => {
    try {
      await Candidate.findByIdAndUpdate({_id: req.params.id}, {...req.body})
      responseSend(res, 200, 'Candidate Updated!')
    } catch (e) {
      return responseSend(res, 404, `Candidate email ${req.body.email} already registered!`)
    }
  },

  deleteCandidate: async (req, res) => {
    try {
      const candidate = await Candidate.findByIdAndDelete(req.params.id)
      if (!candidate) return responseSend(res, 404, `Candidate not found!`)
      responseSend(res, 200, `Candidate successfully deleted!`)
    } catch (e) {
      responseSend(res, 500, `Server Error!`)
    }
  },

}