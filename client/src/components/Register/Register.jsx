import React from 'react';
import s from './Register.module.css';

function Register() {
  return (
    <form className={s.form}>
      <h1 className={`${s.form__title}`}>Register</h1>
      <div className={s.form__inputs}>
        <div className={s.form__group}>
          <label htmlFor="email" className={s.form__lbl}>Email</label>
          <input id='email' type="email" placeholder='' className={s.form__input} />
        </div>

        <div className={s.form__group}>
          <label htmlFor="password" className={s.form__lbl}>Password</label>
          <input id='password' type="password" placeholder='' className={s.form__input} />
        </div>

        <input type="submit" className={s.form__submit} value="Register" />
      </div>
    </form>
  )
}

export default Register