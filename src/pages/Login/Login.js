import React from 'react';

import FormData from '../../components/FormData/FormData';

import './Login.css'
function Login() {
  return (
    <main className='login'>
      <div className='login__overlay'>
        <section className='login__content'>
          <h1 className='login__title'>Login</h1>
          <form className='login__form'>
            <FormData
              labelName="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <FormData
              labelName="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <div className="form-control-remember-me">
              <label htmlFor="checkbox">Remember me</label>
              <input type="checkbox" id="checkbox" />
            </div>
            <button
              type="submit"
              className='login__button'
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Login