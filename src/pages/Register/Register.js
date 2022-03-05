import React from 'react';
import FormData from '../../components/FormData/FormData';
import { Formik, Field, Form } from 'formik';
import register from '../../api/register';

function Register() {
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
      error = '*Password must be 8 characters long.';
    } else if (!passwordRegex.test(value)) {
      error = '*Invalid password. Must contain one number.';
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
      <div className='reisger__overlay'>
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
              await register({
                name,
                email,
                password,
              });
            }}
          >
            {({ errors, touched, isValidating, values }) => (
              <Form>
                <Field type='text' name='name' validate={validateName} />
                {errors.name && touched.name && <div>{errors.name}</div>}
                <Field name='email' validate={validateEmail} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <Field
                  type='password'
                  name='password'
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
                <Field
                  type='password'
                  name='confirmPassword'
                  validate={(value) =>
                    validateConfirmPassword(value, values.password)
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div>{errors.confirmPassword}</div>
                )}
                <button type='submit'>Submit</button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}

export default Register;
