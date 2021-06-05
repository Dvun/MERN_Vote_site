const Room = require('../models/roomModel')
const User = require('../models/userModel')
const Candidate = require('../models/candidateModel')
const Statistic = require('../models/statisticModel')
const {responseSend} = require('../utils/responseSend')


module.exports = {

  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find().populate('candidates')
      if (!rooms) return responseSend(res, 404, 'Rooms not found!')
      res.status(200).json(rooms)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  getCurrentRoom: async (req, res) => {
    try {
      const room = await Room.findOne({_id: req.params.id}).populate('candidates')
      if (!room) return responseSend(res, 404, 'Room not found!')
      res.status(200).json(room)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  createNewRoom: async (req, res) => {
    try {
      const room = await Room.findOne({roomName: req.body.roomName})
      if (room) {
        return responseSend(res, 404, 'Room with this name already exist!')
      }
      await Room.create(req.body)
      responseSend(res, 200, 'Vote room created!')
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  updateRoom: async (req, res) => {
    try {
      await Room.findByIdAndUpdate({_id: req.params.id}, {...req.body})
      responseSend(res, 200, 'Vote Room Updated!')
    } catch (e) {
      return responseSend(res, 404, 'Room name need be unique!')
    }
  },

  deleteRoom: async (req, res) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id)
      await User.updateMany({votedRooms: room._id}, {$pull: {votedRooms: room._id}})
      await Candidate.updateMany({votedInRoom: room._id}, {$pull: {votedInRoom: room._id}})
      await Statistic.findByIdAndDelete(req.params.id)
      responseSend(res, 200, `Room ${room.roomName} is successfully deleted!`)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  votingRoomAndCandidate: async (req, res) => {
    const {userId, roomId, candidateId} = req.body.votingRoomAndCandidate
    try {
      await updateCreateStatistic(userId, roomId, candidateId)
      responseSend(res, 200, 'Voted!')
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

}

async function updateCreateStatistic(userId, roomId, candidateId) {

  // Update users votedCandidates and votedRooms
  await User.findByIdAndUpdate({_id: userId}, {
    $push: {votedCandidates: candidateId, votedRooms: roomId}})

  // Update Candidate votedInRoom and voteFromUser and increment
  await Candidate.findByIdAndUpdate({_id: candidateId}, {
    $inc: {getVote: +1},
    $push: {votedInRoom: roomId, voteFromUser: userId}})

  // Find Statistic in database
  const statistic = await Statistic.findById({_id: roomId})

  // If found statistic
  if (statistic) {

    // Find candidate in Array
    const cnd = statistic.getVotedCandidates.find(candidate => candidate.candidateId.toString() === candidateId)
    if (cnd) {

      // Update found candidate in Array by +1 increment
      await Statistic.updateOne(
        {'_id': roomId, 'getVotedCandidates.candidateId': candidateId},
        {$inc: {"getVotedCandidates.$.getVote": 1}})
      await Statistic.findByIdAndUpdate({_id: roomId}, {$inc: {totalVotes: +1}})
    } else {

      // Add new one candidate to Array if not found
      await Statistic.findOneAndUpdate({_id: roomId}, {
        $push: {getVotedCandidates: {candidateId: candidateId}}, $inc: {totalVotes: +1}})
    }
  }

  // If no statistic in Array, create new one
  if (!statistic) {
    const newStatistics = {_id: roomId, getVotedCandidates: [{candidateId: candidateId}],}
    await Statistic.create(newStatistics)
  }

}

