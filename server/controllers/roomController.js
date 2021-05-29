const Room = require('../models/roomModel')
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
  },

  deleteRoom: async (req, res) => {
  },

}