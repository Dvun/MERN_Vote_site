const mongoose = require('mongoose')
const candidateModel = require('./candidateModel')

const roomModel = new mongoose.Schema({
  roomName: {type: String, trim: true, required: true},
  description: {type: String, required: true},
  createdBy: {type: mongoose.Types.ObjectId, ref: 'User'},
  startDate: {type: Date, required: true},
  candidates: [{type: mongoose.Types.ObjectId, ref: 'Candidate'}]
}, {timestamps: true})


module.exports = mongoose.model('Room', roomModel)