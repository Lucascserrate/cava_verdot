import React, { useState } from "react";
import s from "./Register.module.css";
import Alert from "../Alert/Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [viewAlert, setViewAlert] = useState();

  // capturamos el value de los inputs
  const HandlerInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // enviamos la info capturada en los inputs
  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setViewAlert(<Alert type="error" message="Campos vacios." />);
    } else {
      setViewAlert(<Alert type="ok" message="Registro creado exitosamente." />);
      setUser({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={s.form}>
      <form className={`${s.form__content} ${s.container}`}>
        <h1 className={s.form__title}>Register</h1>

        <div className={s.form__inputs}>

          <div className={s.form__group}>
            <input id="email" type="email" placeholder=" " className={s.form__input} value={user.email} name="email" onChange={HandlerInputs} />
            <label htmlFor="email" className={s.form__lbl}>Email:</label>
            <span className={s.form__bar}></span>
          </div>

          <div className={s.form__group}>
            <input id="password" type="password" placeholder=" " className={s.form__input} value={user.password} name="password" onChange={HandlerInputs} />
            <label htmlFor="password" className={s.form__lbl}>Password:</label>
            <span className={s.form__bar}></span>
          </div>

          <input type="submit" className={s.form__submit} value="Register" onClick={HandlerSubmit} />
        </div>

        <div className={s.form__alert}>{viewAlert}</div>
      </form>
    </div>
  );
}

export default Register;
