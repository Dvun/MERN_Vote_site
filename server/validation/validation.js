const {check} = require('express-validator')


const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(email)
}

// Validation for registration and login Users

const validator = {

  registerValidator: [
    check('name', 'Name is required!').notEmpty(),
    check('email', 'Email is required!').notEmpty().isEmail().normalizeEmail().custom(validateEmail)
      .withMessage('Email is not correct!'),
    check('password', 'Password is required!').notEmpty().isLength({min: 6})
      .withMessage('Password minimum length is 6 chars!').matches(/\d/).withMessage('Password must contains a number!'),
  ],

  loginValidator: [
    check('email', 'Email is required!').notEmpty().isEmail().normalizeEmail().custom(validateEmail)
      .withMessage('Email is not correct!'),
    check('password', 'Password is required!').notEmpty().isLength({min: 6})
      .withMessage('Password minimum length is 6 chars!').matches(/\d/).withMessage('Password must contains a number!'),
  ],

}


module.exports = validator