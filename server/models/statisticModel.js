const mongoose = require('mongoose')

const statisticModel = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId, ref: 'Room'},
    totalVotes: {type: Number, default: 1},
    getVotedCandidates: [{
        candidateId: {type: mongoose.Types.ObjectId, ref: 'Candidate'},
        getVote: {type: Number, default: 1}
    }],
}, {timestamps: false})


module.exports = mongoose.model('Statistic', statisticModel)
