import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import register from '../../api/register';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [errorRegister, setErrorRegister] = useState({
    isError: false,
    message: '',
  });

  const validateName = (value) => {
    let error = '';
    if (!value) {
      error = 'Name is required';
    }
    return error;
  };

  const validateEmail = (value) => {
    let error = '';
    if (!value) {
      error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = (value) => {
    let error = '';
    const passwordRegex = /(?=.*[0-9])/;
    if (!value) {
      error = 'This field is required';
    } else if (value.length < 8) {
      error = 'Password must be 8 characters long';
    } else if (!passwordRegex.test(value)) {
      error = 'Invalid password. Must contain one number';
    }
    return error;
  };

  const validateConfirmPassword = (pass, value) => {
    let error = '';
    if (pass && value) {
      if (pass !== value) {
        error = 'Password not matched';
      }
    }
    return error;
  };

  return (
    <main className='register'>
      <div className='register__overlay'>
        <section className='register__content'>
          <h1 className='register__title'>Sign Up</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={async (values) => {
              const { name, email, password } = values;

              try {
                await register({
                  name,
                  email,
                  password,
                });
                setErrorRegister({
                  isError: false,
                  message: '',
                });
                console.log('user register correctly');
              } catch (error) {
                setErrorRegister({
                  isError: true,
                  message: 'The actual email already exists',
                });
              }
            }}
          >
            {({ errors, touched, isValidating, values }) => (
              <Form>
                <label htmlFor='name'>Name</label>
                <Field
                  className='register__input'
                  type='text'
                  name='name'
                  validate={validateName}
                />
                {errors.name && touched.name && (
                  <div className='register__error'>{errors.name}</div>
                )}
                <label htmlFor='email'>Email</label>
                <Field
                  className='register__input'
                  name='email'
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className='register__error'>{errors.email}</div>
                )}
                <label htmlFor='password'>Password</label>
                <Field
                  className='register__input'
                  type='password'
                  name='password'
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div className='register__error'>{errors.password}</div>
                )}
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <Field
                  className='register__input'
                  type='password'
                  name='confirmPassword'
                  validate={(value) =>
                    validateConfirmPassword(value, values.password)
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className='register__error'>
                    {errors.confirmPassword}
                  </div>
                )}
                <Link className='register__already-have-account' to='/login'>
                  I already have an account
                </Link>
                <button className='register__button' type='submit'>
                  Register
                </button>
                {errorRegister.isError ? <p>{errorRegister.message}</p> : null}
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}

export default Register;
