import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./Register.module.css";
import Alert from "../Alert/Alert";

function Register() {
  const [timeAlert, setTimeAlert] = useState(false)

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          email: "",
          password: "",

        }}
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
          <Form className={`${s.form__content} ${s.container}`}>
            <h1 className={s.form__title}>Register</h1>

            <div className={s.form__inputs}>
              <div className={s.form__group}>
                <Field
                  id="email"
                  type="email"
                  placeholder=" "
                  className={s.form__input}
                  name="email"
                />
                <label htmlFor="email" className={s.form__lbl}>
                  Email:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
                <ErrorMessage
                  name="email"
                  component={() => (
                    <span className={s.error}>{errors.email}</span>
                  )}
                />
              </div>

              <div className={s.form__group}>
                <Field
                  id="password"
                  type="password"
                  placeholder=" "
                  className={s.form__input}
                  name="password"
                />
                <label htmlFor="password" className={s.form__lbl}>
                  Password:
                </label>
                <span className={s.form__bar}></span>
              </div>

              <div className={s.form__message}>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <span className={s.error}>{errors.password}</span>
                  )}
                />
              </div>
            
              <input
                type="submit"
                className={s.form__submit__google}
                value="Register with Google"
              />
              <input
                type="submit"
                className={s.form__submit}
                value="Register"
              />
            </div>

            <div className={s.form__alert}>{timeAlert && (<Alert type="ok" message="Registro creado exitosamente." />)}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
