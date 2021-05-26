const express = require('express')
const router = express.Router()
const {userLogin, userLogout, userRegister} = require('../controllers/authController')
const {registerValidator, loginValidator} = require('../validation/validation')


router.post('/auth/register', registerValidator, userRegister)
router.post('/auth/login', loginValidator, userLogin)
router.get('/auth/logout', userLogout)

module.exports = router