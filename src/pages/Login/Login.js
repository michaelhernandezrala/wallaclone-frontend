import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import login from '../../api/login';
import AuthContext from '../../components/auth/context';
import './Login.css';
import Swal from 'sweetalert2';

function Login({ history, location }) {
  const { handleLogin } = useContext(AuthContext);
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
                if (response.ok === true) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    handleLogin();
                    const { from } = location.state || {
                      from: { pathname: '/' },
                    };
                    history.replace(from);
                  });
                } else {
                  setErrorLogin({
                    isError: true,
                    message: response.error,
                  });
                }
              } catch (error) {}
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <label htmlFor='email'>Email</label>
                <Field
                  className='login__input'
                  name='email'
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className='login__error'>{errors.email}</div>
                )}
                <label htmlFor='password'>Password</label>
                <Field
                  className='login__input'
                  type='password'
                  name='password'
                />
                <div className='form-control-remember-me'>
                  <label htmlFor='checkbox'>Remember me</label>
                  <input
                    type='checkbox'
                    id='checkbox'
                    checked={checked}
                    onChange={handleChange}
                  />
                </div>
                {errorLogin.isError ? (
                  <p className='login__error'>{errorLogin.message}</p>
                ) : null}
                <Link className='login__link' to='/register'>
                  I don't have an account
                </Link>
                <Link className='login__link' to='/forgottenPassword'>
                  Recover my password
                </Link>
                <button className='login__button' type='submit'>
                  Log in
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}

export default Login;
