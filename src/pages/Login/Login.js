import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import login from '../../api/login';

function Login() {
  const [errorLogin, setErrorLogin] = useState({
    isError: false,
    message: '',
  });
  const [checked, setChecked] = useState(false);

  const validateEmail = (value) => {
    let error = '';
    if (!value) {
      error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <main className='login'>
      <div className='login__overlay'>
        <section className='login__content'>
          <h1 className='login__title'>Login</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (values) => {
              try {
                const response = await login(values, checked);
              } catch (error) {}
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <label htmlFor='email'>Email</label>
                <Field name='email' validate={validateEmail} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <label htmlFor='password'>Password</label>
                <Field type='password' name='password' />
                <div className='form-control-remember-me'>
                  <label htmlFor='checkbox'>Remember me</label>
                  <input
                    type='checkbox'
                    id='checkbox'
                    checked={checked}
                    onChange={handleChange}
                  />
                </div>
                <button type='submit'>Submit</button>
                {errorLogin.isError ? <p>{errorLogin.message}</p> : null}
                <Link to='/register'>I don't have an account</Link>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}

export default Login;
