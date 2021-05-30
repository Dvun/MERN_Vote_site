const {responseSend} = require('../utils/responseSend')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


module.exports = {

  generateToken: async (user) => {
    const {_id, roles} = user
    return await jwt.sign({id: _id, roles: roles}, process.env.JWT_SECRET, {expiresIn: '7d'})
  },

  verifyToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) return responseSend(res, 401, 'Not authorized, token failed!')
      const decoded = await jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (e) {
      console.log(e)
      return responseSend(res, 500, 'Server Error!')
    }
  },

  roleVerify: (roles) => {
    return async function (req, res, next) {
      try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) return responseSend(res, 401, 'Not authorized, token failed!')
        const {roles: userRoles} = await jwt.verify(token, process.env.JWT_SECRET)
        let hasRole = false
        userRoles.forEach(role => {
          if (roles.includes(role)) hasRole = true
        })
        if (!hasRole) return responseSend(res, 401, 'You have no permissions!')
        next()
      } catch (e) {
        responseSend(res, 401, 'Not authorized, token failed!')
      }
    }
  },

}