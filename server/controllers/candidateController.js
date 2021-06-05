const Candidate = require('../models/candidateModel')
const User = require('../models/userModel')
const Statistic = require('../models/statisticModel')
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
      await User.updateMany({votedCandidates: candidate._id}, {$pull: {votedCandidates: candidate._id}})
      if (!candidate) return responseSend(res, 404, `Candidate not found!`)
      await deleteCandidateFromStatistic(req.params.id)
      responseSend(res, 200, `Candidate successfully deleted!`)
    } catch (e) {
      console.log(e)
      responseSend(res, 500, `Server Error!`)
    }
  },

}

async function deleteCandidateFromStatistic(id) {

  const statistic = await Statistic.find({'getVotedCandidates.candidateId': id})
  statistic.map(obj => {
    const result = obj.getVotedCandidates.filter(item => {
      if (item.candidateId == id) return item
    })[0]

    if (result !== undefined) {
      obj.totalVotes = obj.totalVotes - result.getVote
      obj.getVotedCandidates = obj.getVotedCandidates.filter(item => {
        if (item.candidateId != id) return item
      })
      obj.save()
    }
  })

}