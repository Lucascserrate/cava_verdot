import React, {useState} from 'react';
import s from './Register.module.css';
import Alert from '../Alert/Alert';

function Register() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [viewAlert, setViewAlert] = useState();

  const HandlerInputs = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const HandlerSubmit = (e) => {
    e.preventDefault();
    if(!user.email || !user.password){
      setViewAlert(<Alert type='error' message='Campos vacios.'/>);
    }else{
      setViewAlert(<Alert type="ok" message="Registro creado exitosamente." />);
      setUser({
        email: '',
        password: ''
      })
    }
  }

  return (
    <form className={s.form}>
      <h1 className={s.form__title}>Register</h1>
      <div className={s.form__inputs}>
        <div className={s.form__group}>
          <label htmlFor="email" className={s.form__lbl}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder=""
            className={s.form__input}
            value={user.email}
            name="email"
            onChange={HandlerInputs}
          />
        </div>

        <div className={s.form__group}>
          <label htmlFor="password" className={s.form__lbl}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder=""
            className={s.form__input}
            value={user.password}
            name="password"
            onChange={HandlerInputs}
          />
        </div>

        <input
          type="submit"
          className={s.form__submit}
          value="Register"
          onClick={HandlerSubmit}
        />
      </div>
      {viewAlert}
    </form>
  );
}

export default Register