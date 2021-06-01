const express = require('express')
const {verifyToken} = require('../middlewares/authMiddleware')
const router = express.Router()
const {userLogin, userLogout, userRegister, getCurrentUser} = require('../controllers/authController')
const {registerValidator, loginValidator} = require('../validation/validation')


router.post('/auth/register', registerValidator, userRegister)
router.post('/auth/login', loginValidator, userLogin)
router.get('/auth/logout', userLogout)

router.get('/auth/users/:id', verifyToken, getCurrentUser)

module.exports = router