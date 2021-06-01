const mongoose = require('mongoose')

const statisticModel = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId, ref: 'User'},
    candidateId: [{type: mongoose.Types.ObjectId, ref: 'Candidate'}],
    roomId: [{type: mongoose.Types.ObjectId, ref: 'Room'}],
}, {timestamps: true})


module.exports = mongoose.model('Statistic', statisticModel)