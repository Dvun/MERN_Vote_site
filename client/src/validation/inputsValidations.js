import * as yup from 'yup'

export const registerValidation = yup.object().shape({
  name: yup.string().required('Name is required!'),
  email: yup.string().required('Email is required!').email('Email not valid!')
    //eslint-disable-next-line
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not correct!'),
  password: yup.string().required('Password is required!').min(5, 'Minimum length is 5 chars').matches(/\d/, 'Password must contains a number!'),
  repeatPassword: yup.string().required('Password must match!').oneOf([yup.ref('password'), null], 'Password must match!')
})

export const loginValidation = yup.object().shape({
  email: yup.string().required('Email is required!').email('Email not valid!')
    //eslint-disable-next-line
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not correct!'),
  password: yup.string().required('Password is required!').min(5, 'Minimum length is 5 chars').matches(/\d/, 'Password must contains a number!'),
})