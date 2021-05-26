import React from 'react'
import {Formik, Form} from 'formik'
import {loginValidation} from '../validation/inputsValidations'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import TextInput from '../UI/forms/TextInput'
import {useDispatch} from 'react-redux'
import {loginUser} from '../store/actions/authActions'

const LoginPage = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(loginUser(values))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 offset-xl-4 col-md-4 offset-md-4 pb-5 mt-5">
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginValidation}
            onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
          >
            <Form>

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

              <div>
                <p>Have no account? <Link to="/register">Register</Link></p>
              </div>
              <div>
                <Button
                  primary
                  floated="right"
                  size={'large'}
                  type="submit"
                >Login
                </Button>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LoginPage