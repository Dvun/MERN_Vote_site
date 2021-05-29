const express = require('express')
const router = express.Router()
const {createNewRoom, getAllRooms, getCurrentRoom, updateRoom, deleteRoom} = require('../controllers/roomController')


router.post('/rooms', createNewRoom)
router.get('/rooms', getAllRooms)
router.get('/rooms/:id', getCurrentRoom)
router.put('/rooms/:id', updateRoom)
router.delete('/rooms/:id', deleteRoom)

module.exports = router