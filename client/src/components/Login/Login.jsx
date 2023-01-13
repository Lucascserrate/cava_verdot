import React, {useState} from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import {Link} from 'react-router-dom'
import s from './Login.module.css';
import Alert from '../Alert/Alert';
import Button3 from '../Button3/Button3'

function Login() {
  const [timeAlert, setTimeAlert] = useState(false);

  return (
    <div className={s.login}>
      <a href="#modal" className={s.cta}>
        <Button3 value='Sign In'/>
      </a>
      <Formik
        initialValues={{ email: "", password: "" }}
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
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setTimeAlert(true);
          setTimeout(() => setTimeAlert(false), 5000);
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

              <a href="#" className={s.login__close}>
                X
              </a>
              <div className={s.login__alert}>
                {timeAlert && (
                  <Alert type="ok" message="Registro creado exitosamente." />
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