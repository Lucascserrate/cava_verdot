import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase.js";
import { Link } from "react-router-dom";
import s from "./Login.module.css";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { parseJwt } from "../../functions/parseTokenJwt";
import GoogleButton from "react-google-button";

function Login() {
  const [timeAlert, setTimeAlert] = useState(false);
  const [viewAlert, setViewAlert] = useState();
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/");
  };
  const handleClickGoogle = async (e) => {
    e.preventDefault();
    try {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          GoogleAuthProvider.credentialFromResult(result);
          const { email, uid } = result.user;
          const res = await axios.post("auth/login", {
            email: email,
            password: uid,
          });
          window.localStorage.setItem("token", res.data);
          parseJwt(res.data);
          setViewAlert(<Alert type="ok" message="Inicio exitoso" />);
          setTimeAlert(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          setViewAlert(<Alert type="error" message="No existe un usuario" />);
          setTimeAlert(true);
          setTimeout(() => {
            setTimeAlert(false);
          }, 4000);
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={s.login}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          oldId: window.localStorage.getItem("userId")
            ? window.localStorage.getItem("userId")
            : null,
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
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post("/auth/login", values);
            window.localStorage.setItem("token", res.data);
            const decript = parseJwt(res.data);
            window.localStorage.setItem("userId", decript.id);
            resetForm();
            setViewAlert(<Alert type="ok" message="Inicio exitoso" />);
            setTimeAlert(true);
            setTimeout(() => {
              setTimeAlert(false);
              navigate("/");
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
                <div>
                  <div className={s.login__group}>
                    <label className={s.login__lbl}>Email:</label>
                    <Field
                      type="email"
                      className={s.login__input}
                      placeholder="email@email.com"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className={s.login__message}>
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <span className={s.error}>{errors.email}</span>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <div className={s.login__group}>
                    <label className={s.login__lbl}>Password:</label>
                    <Field
                      type="password"
                      className={s.login__input}
                      placeholder="....."
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className={s.login__message}>
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
                  className={s.login__submit}
                  value="Iniciar Sesion"
                />

                <GoogleButton

                  type='light'
                  onClick={e => handleClickGoogle(e)}
                />

                <p>¿No tiene cuenta?<Link to='/register'> Registrate.</Link></p>

              </div>
              <div className={s.login__alert}>{timeAlert && viewAlert}</div>

              <label onClick={handleOnClose} className={s.login__close}>
              ✖
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
