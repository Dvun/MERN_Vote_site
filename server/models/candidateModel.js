const mongoose = require('mongoose')

const candidateModel = new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  email: {type: String, trim: true, required: true, unique: true},
  getVote: {type: Number, default: 0},
  votedInRoom: [{type: mongoose.Types.ObjectId, ref: 'Room'}],
  voteFromUser: [{type: mongoose.Types.ObjectId, ref: 'User'}],

}, {timestamps: true})


module.exports = mongoose.model('Candidate', candidateModel)