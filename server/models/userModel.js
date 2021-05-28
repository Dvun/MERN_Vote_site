const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userModel = new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  email: {type: String, trim: true, required: true, unique: true},
  password: {type: String, trim: true, required: true, min: 5, max: 15},
  picture: {type: String, default: '/avatar.png'},
  roles: {type: [String], default: ['user'], enum: ['user', 'candidate', 'admin']},
  voted: [
    {
      isVoted: {type: Boolean, default: false},
      candidateId: {type: mongoose.Types.ObjectId, ref: 'Candidate'},
      votedRoomId: {type: mongoose.Types.ObjectId, ref: 'Room'},
    },
  ],

}, {timestamps: true})


// Hash registered User password
userModel.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password, 11)
})

// User password control for login
userModel.methods.matchPassword = async function (addedPassword) {
  return await bcrypt.compare(addedPassword, this.password)
}

module.exports = mongoose.model('User', userModel)