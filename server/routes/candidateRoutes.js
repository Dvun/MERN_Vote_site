const express = require('express')
const router = express.Router()
const {createNewCandidate, getAllCandidates, getCurrentCandidate, deleteCandidate, updateCandidate} = require('../controllers/candidateController')


router.post('/candidates', createNewCandidate)
router.get('/candidates', getAllCandidates)
router.get('/candidates/:id', getCurrentCandidate)
router.put('/candidates/:id', updateCandidate)
router.delete('/candidates/:id', deleteCandidate)

module.exports = router