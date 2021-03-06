const {generateToken} = require('../middlewares/authMiddleware')
const User = require('../models/userModel')
const {responseSend} = require('../utils/responseSend')


module.exports = {

  getCurrentUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password').select('-roles').select('-createdAt').select('-updatedAt')
      res.status(200).json(user)
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  userRegister: async (req, res) => {
    const {name, email, password} = req.body
    try {
      const user = await User.findOne({email})
      if (user) return responseSend(res, 404, `User with email ${email} already exist!`)
      const newUser = {name, email, password}
      await User.create(newUser)
      responseSend(res, 201, 'User registered!')
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  userLogin: async (req, res) => {
    const {email, password} = req.body
    try {
      const user = await User.findOne({email})
      if (!user) return responseSend(res, 404, `User with email ${email} is not registered!`)
      const passwordMatch = await user.matchPassword(password)
      if (!passwordMatch) return responseSend(res, 404, 'Email or password is not correct!')
      const token = await generateToken(user)
      const loggedUser = {
        user: {
          _id: user._id,
          picture: user.picture,
          roles: user.roles,
          name: user.name,
          email: user.email,
          votedCandidates: user.votedCandidates,
          votedRooms: user.votedRooms,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        token,
      }
      res.status(200).json({loggedUser, message: 'Logged in!'})
    } catch (e) {
      responseSend(res, 500, 'Server Error!')
    }
  },

  userLogout: async (req, res) => {
    try {
    } catch (e) {
      console.log(e)
    }
  },

}