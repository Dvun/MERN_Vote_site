const Room = require('../models/roomModel')
const User = require('../models/userModel')
const Candidate = require('../models/candidateModel')
const {responseSend} = require('../utils/responseSend')


module.exports = {

  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find()
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
      responseSend(res, 200, `Room ${room.roomName} is successfully deleted!`)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  votingRoomAndCandidate: async (req, res) => {
    const {userId, roomId, candidateId} = req.body.votingRoomAndCandidate
    try {
      await User.findByIdAndUpdate({_id: userId}, {
        $push: {
          votedCandidates: candidateId,
          votedRooms: roomId,
        },
      })
      await Candidate.findByIdAndUpdate({_id: candidateId}, {
        $push: {
          votedInRoom: roomId,
          voteFromUser: userId,
        },
      })
      responseSend(res, 200, 'Voted!')
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

}