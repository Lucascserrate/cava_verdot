import React, {useState} from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import {Link} from 'react-router-dom'
import s from './Login.module.css';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {parseJwt} from '../../functions/parseTokenJwt'

function Login() {
  const [timeAlert, setTimeAlert] = useState(false);

  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/")
  }

  return (
    <div className={s.login}>
      <Formik
        initialValues={{ email: "", password: "", oldId: window.localStorage.getItem("userId")? window.localStorage.getItem("userId"):null }}
        validate={(values) => {
          let errores = {};

          if (!values.email) {
            errores.email = "Por favor ingresa un correo electronico.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          if (!values.password) {
            errores.password = "Por favor ingresa una contraseña";
          }

          return errores;
        }}
        onSubmit={ async (values, { resetForm }) => {
          try {
            const res = await axios.post('/auth/login', values)
            window.localStorage.setItem("token", res.data);
            const decript = parseJwt(res.data);
            window.localStorage.setItem("userId", decript.id);
            resetForm();
            setTimeAlert(true);
            setTimeout(() => {
              setTimeAlert(false)
              window.history.back()
            }, 2000);
          } catch (error) {
            console.log(error.response.data);
          }
        }}
      >
        {({ errors }) => (
          <Form className={s.login__modal} id="modal">
            <div className={s.login__contain}>
              <h1 className={s.login__title}>Login</h1>

              <div className={s.login__inputs}>
                <div className={s.login__group}>
                  <Field
                    type="email"
                    className={s.login__input}
                    placeholder=" "
                    name="email"
                    id="email"
                  />
                  <label className={s.login__lbl}>Email:</label>
                  <span className={s.login__bar}></span>
                </div>
                <div className={s.login__message}>
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <span className={s.error}>{errors.email}</span>
                    )}
                  />
                </div>

                <div className={s.login__group}>
                  <Field
                    type="password"
                    className={s.login__input}
                    placeholder=" "
                    name="password"
                    id="password"
                  />
                  <label className={s.login__lbl}>Password:</label>
                  <span className={s.login__bar}></span>
                </div>
                <div className={s.login__message}>
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <span className={s.error}>{errors.password}</span>
                    )}
                  />
                </div>

                <input
                  type="submit"
                  className={s.login__submit}
                  value="Iniciar Sesion"
                />
                <p>¿No tiene cuenta?<Link to='/register'> Registrate.</Link></p>
                
              </div>

              <label onClick={handleOnClose} className={s.login__close}>
                X
              </label>
              <div className={s.login__alert}>
                {timeAlert && (
                  <Alert type="ok" message="Inicio de sesion exitoso" />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login