import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./FinalRegister.module.css";
import Alert from "../Alert/Alert";

function FinalRegister() {
  const [timeAlert, setTimeAlert] = useState(false);

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          adress: "",
          image: "",
        }}
        validate={(values) => {
          let errores = {};

          //Validaciones NOMBRE
          if (!values.name) {
            errores.name = "Por favor ingresa un nombre.";
          } else if (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(values.name)) {
            errores.name =
              "El nombre solo puede contener letras mayúsculas y minúsculas.";
          }

          //Validaciones APELLIDO
          if (!values.surname) {
            errores.surname = "Por favor ingresa un apellido.";
          } else if (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(values.surname)) {
            errores.surname =
              "El apellido solo puede contener letras mayúsculas y minúsculas.";
          }

          //Validaciones EDAD
          if (!values.age) {
            errores.age = "Por favor ingresa tu edad.";
          }
          if (values.age < 18) {
            errores.age = "Debes ser mayor de 18 años para registrarte.";
          } else if (/^[0-9]+$/.test(values.age)) {
            errores.age = "Este campo solo puede contener números.";
          }

          //Validaciones ADRESS
          if (!values.adress) {
            errores.adress = "Por favor ingresa una dirección.";
          }

          //Validaciones IMAGE
          if (!values.image) {
            errores.img = "Por favor ingresa la URL de una imagen.";
          }

          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          // axios.post('localhost:3001/users', values)
          resetForm();
          setTimeAlert(true);
          setTimeout(() => setTimeAlert(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className={`${s.form__content} ${s.container}`}>
            <h1 className={s.form__title}>Completa tu registro</h1>

            <div className={s.form__inputs}>
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

              <div className={s.form__group}>
                <Field
                  id="age"
                  type="number"
                  placeholder=" "
                  className={s.form__input}
                  name="age"
                />
                <label htmlFor="age" className={s.form__lbl}>
                  Age:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
                <ErrorMessage
                  name="age"
                  component={() => (
                    <span className={s.error}>{errors.age}</span>
                  )}
                />
              </div>

              <div className={s.form__group}>
                <Field
                  id="adress"
                  type="text"
                  placeholder=" "
                  className={s.form__input}
                  name="adress"
                />
                <label htmlFor="adress" className={s.form__lbl}>
                  Adress:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
                <ErrorMessage
                  name="adress"
                  component={() => (
                    <span className={s.error}>{errors.adress}</span>
                  )}
                />
              </div>

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

export default FinalRegister;
