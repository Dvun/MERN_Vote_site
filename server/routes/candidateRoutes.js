const express = require('express')
const {verifyToken} = require('../middlewares/authMiddleware')
const {roleVerify} = require('../middlewares/authMiddleware')
const router = express.Router()
const {createNewCandidate, getAllCandidates, getCurrentCandidate, deleteCandidate, updateCandidate} = require('../controllers/candidateController')


router.post('/candidates', verifyToken, roleVerify(['admin', 'candidate']), createNewCandidate)
router.get('/candidates', verifyToken, roleVerify(['user', 'admin', 'candidate']), getAllCandidates)
router.get('/candidates/:id', verifyToken, roleVerify(['user', 'admin', 'candidate']), getCurrentCandidate)
router.put('/candidates/:id', verifyToken, roleVerify(['admin', 'candidate']), updateCandidate)
router.delete('/candidates/:id', verifyToken, roleVerify(['admin', 'candidate']), deleteCandidate)

module.exports = router