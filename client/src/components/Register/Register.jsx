import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./Register.module.css";
import Alert from "../Alert/Alert";
import axios from "axios"

function Register() {
  const [timeAlert, setTimeAlert] = useState(false);

  let getAge = sessionStorage.getItem("age");

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          surname: "",
          age: sessionStorage.getItem("age"),
          address: "",
          image: "",
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

          //Validaciones NOMBRE
          if (!values.name) {
            errores.name = "Por favor ingresa un nombre.";
          } 
          // else if (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(values.name)) {
          //   errores.name =
          //     "El nombre solo puede contener letras mayúsculas y minúsculas.";
          // }

          //Validaciones APELLIDO
          if (!values.surname) {
            errores.surname = "Por favor ingresa un apellido.";
          } 
          // else if (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(values.surname)) {
          //   errores.surname =
          //     "El apellido solo puede contener letras mayúsculas y minúsculas.";
          // }

          //Validaciones ADRESS
          if (!values.address) {
            errores.address = "Por favor ingresa una dirección.";
          }

          //Validaciones IMAGE
          if (!values.image) {
            errores.image = "Por favor ingresa la URL de una imagen.";
          }

          return errores;
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post("/users", values);
            resetForm();
            setTimeAlert(true);
            setTimeout(() => setTimeAlert(false), 5000);
            sessionStorage.setItem("token", res)
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors }) => (
          <Form className={`${s.form__content} ${s.container}`}>
            <h1 className={s.form__title}>Register</h1>

            <div className={s.form__inputs}>
              <div>
                <div className={s.form__group}>
                  <Field
                    id="name"
                    type="text"
                    placeholder=" "
                    className={s.form__input}
                    name="name"
                  />
                  <label htmlFor="name" className={s.form__lbl}>
                    Name:
                  </label>
                  <span className={s.form__bar}></span>
                </div>
                <div className={s.form__message}>
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <span className={s.error}>{errors.name}</span>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className={s.form__group}>
                  <Field
                    id="surname"
                    type="text"
                    placeholder=" "
                    className={s.form__input}
                    name="surname"
                  />
                  <label htmlFor="surname" className={s.form__lbl}>
                    Surname:
                  </label>
                  <span className={s.form__bar}></span>
                </div>
                <div className={s.form__message}>
                  <ErrorMessage
                    name="surname"
                    component={() => (
                      <span className={s.error}>{errors.surname}</span>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className={s.form__group}>
                  <Field
                    id="age"
                    type="number"
                    placeholder=" "
                    className={s.form__input}
                    name="age"
                  />
                  <label htmlFor="age" className={s.form__lbl}>
                    Age: {getAge}
                  </label>
                  <span className={s.form__bar}></span>
                </div>
              </div>

              <div>
                <div className={s.form__group}>
                  <Field
                    id="address"
                    type="text"
                    placeholder=" "
                    className={s.form__input}
                    name="address"
                  />
                  <label htmlFor="address" className={s.form__lbl}>
                    Address:
                  </label>
                  <span className={s.form__bar}></span>
                </div>
                <div className={s.form__message}>
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <span className={s.error}>{errors.address}</span>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className={s.form__group}>
                  <Field
                    id="image"
                    type="url"
                    placeholder=" "
                    className={s.form__input}
                    name="image"
                  />
                  <label htmlFor="image" className={s.form__lbl}>
                    Image:
                  </label>
                  <span className={s.form__bar}></span>
                </div>
                <div className={s.form__message}>
                  <ErrorMessage
                    name="image"
                    component={() => (
                      <span className={s.error}>{errors.image}</span>
                    )}
                  />
                </div>
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <input
                type="submit"
                className={s.form__submit}
                value="Register"
              />
            </div>

            <div className={s.form__alert}>
              {timeAlert && (
                <Alert type="ok" message="Registro creado exitosamente." />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
