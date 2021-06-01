const express = require('express')
const {verifyToken} = require('../middlewares/authMiddleware')
const {roleVerify} = require('../middlewares/authMiddleware')
const router = express.Router()
const {
  createNewRoom,
  getAllRooms,
  getCurrentRoom,
  updateRoom,
  deleteRoom,
  votingRoomAndCandidate,
} = require('../controllers/roomController')


router.post('/rooms', verifyToken, roleVerify(['admin', 'candidate']), createNewRoom)
router.get('/rooms', getAllRooms)
router.get('/rooms/:id', verifyToken, roleVerify(['user', 'admin', 'candidate']), getCurrentRoom)
router.put('/rooms/:id', verifyToken, roleVerify(['admin', 'candidate']), updateRoom)
router.delete('/rooms/:id', verifyToken, roleVerify(['admin', 'candidate']), deleteRoom)

router.put('/voting/:id', verifyToken, roleVerify(['user', 'admin', 'candidate']), votingRoomAndCandidate)

module.exports = router