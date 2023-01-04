import React from 'react'

function Register() {
  return (
    <form className='form'>
      <h1 className="form__title">Register</h1>
      <div className="form__inputs">
        <div className="form__group">
          <label htmlFor="email" className='form__lbl'>Email</label>
          <input id='email' type="email" placeholder='' className='form__input' />
        </div>

        <div className="form__group">
          <label htmlFor="password" className='form__lbl'>Password</label>
          <input id='password' type="password" placeholder='' className='form__input' />
        </div>

        <input type="submit" className="form__submit" value="Register" />
      </div>
    </form>
  )
}

export default Register