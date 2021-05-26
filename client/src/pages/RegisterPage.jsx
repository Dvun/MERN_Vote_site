import React, {useEffect} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import TextInput from '../UI/forms/TextInput'
import {Form, Formik} from 'formik'
import {registerValidation} from '../validation/inputsValidations'
import {useDispatch, useSelector} from 'react-redux'
import {registerUser} from '../store/actions/authActions'

const RegisterPage = ({history}) => {
  const dispatch = useDispatch()
  const {isLoading, user} = useSelector(({authReducers}) => authReducers)

  useEffect(() => {
    user && history.push('/')
  }, [user, history])


  const handleSubmit = async (values, resetForm) => {
    const {name, email, password, repeatPassword} = values
    if (repeatPassword !== password) return
    const newUser = {name, email, password}
    dispatch(registerUser(newUser, resetForm, history))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 offset-xl-4 col-md-4 offset-md-4 pb-5 mt-5">
          <Formik
            initialValues={{name: '', email: '', password: '', repeatPassword: ''}}
            validationSchema={registerValidation}
            onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
          >
            <Form>

              <TextInput
                type="text"
                name="name"
                placeholder="Your full name"
                className="form-control mb-4 p-2"
              />
              <TextInput
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control mb-4 p-2"
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Your Password"
                className="form-control mb-4 p-2"
              />
              <TextInput
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
                className="form-control mb-4 p-2"
              />

              <div>
                <p>Have already account? <Link to="/login">Login</Link></p>
              </div>
              <div>
                <Button
                  loading={isLoading}
                  primary
                  floated="right"
                  size={'large'}
                  type="submit"
                >Register
                </Button>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage