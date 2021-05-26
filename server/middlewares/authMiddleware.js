const {responseSend} = require('../utils/responseSend')

const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


module.exports = {

  generateToken: async (user) => {
    const {_id, role} = user
    return await jwt.sign({_id, role}, process.env.JWT_SECRET, {expiresIn: '1m'})
  },

  verifyToken: async (req, res, next) => {
    let token
    try {
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, process.env.SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        next()
      } else {
        return responseSend(res, 401, 'Not authorized, token failed!')
      }
    } catch (e) {
      return responseSend(res, 500, 'Server Error!')
    }
  }

}