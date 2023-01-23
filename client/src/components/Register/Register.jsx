import React, { useState, useEffect } from "react";
import s from "./Register.module.css";
import Alert from "../Alert/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import criptoJS from "crypto-js";
import GoogleButton from "react-google-button";
import { auth, provider } from "../../firebase/firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { parseJwt } from "../../functions/parseTokenJwt";
import AlertAge from "../AlertAge/AlertAge";

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let getAge = sessionStorage.getItem("age");

  const [viewAlertAge, setViewAlertAge] = useState();

  useEffect(() => {
    let dia = sessionStorage.getItem("dia");
    let mes = sessionStorage.getItem("mes");
    let anio = sessionStorage.getItem("anio");

    if (!window.localStorage.getItem("token")) {
      if (!dia || !mes || !anio) {
        setViewAlertAge(<AlertAge />);
      }
    }
  }, []);

  const [timeAlertError, setTimeAlertError] = useState(false);
  const [viewAlert, setViewAlert] = useState();

  const [datosInputs, setDatosInputs] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    age: sessionStorage.getItem("age") ? sessionStorage.getItem("age") : "",
    image: "",
    emailProvider: "",
  });

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "CAVA-verdot");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcxiks4ku/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setDatosInputs({
      ...datosInputs,
      image: file.secure_url,
    });
    console.log(res);
  };
  // console.log(datosInputs);

  const encriptar = (password) => {
    let textoCifrado = criptoJS.AES.encrypt(
      password,
      process.env.REACT_APP_PASSWORD_SECRET
    ).toString();
    return textoCifrado;
  };

  const handleOnChangeInputs = (e) => {
    setDatosInputs({ ...datosInputs, [e.target.name]: e.target.value });
  };

  const handleClickGoogle = async (e) => {
    e.preventDefault();
    try {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          GoogleAuthProvider.credentialFromResult(result);
          const { email, displayName, uid, photoURL } = result.user;
          const encriptado = encriptar(uid);
          const res = await axios.post("/users", {
            email: email,
            password: encriptado,
            name: displayName,
            age: sessionStorage.getItem("age"),
            // ? sessionStorage.getItem("age")
            // : "",
            image: photoURL,
            emailProvider: "google",
          });
          const decript = parseJwt(res.data);
          dispatch(setUser(decript));
          setViewAlert(<Alert type="ok" message="Registro creado." />);
          setTimeAlertError(true);
          setTimeout(() => {
            setTimeAlertError(false);
          }, 4000);
          window.localStorage.setItem("token", res.data);
          setTimeout(() => {
            navigate("/"); // modificar esta ruta para que redirija al dasboard del cliente
          }, 1000);
        })
        .catch((error) => {
          GoogleAuthProvider.credentialFromError(error);
          setViewAlert(
            <Alert type="error" message="Este correo ya esta registrado" />
          );
          setTimeAlertError(true);
          setTimeout(() => {
            setTimeAlertError(false);
          }, 4000);
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  const onSubmit = async (e) => {
    const { name, surname, password, image, email, age } = datosInputs;
    e.preventDefault();
    if (!name || !password || !email || !age) {
      setViewAlert(<Alert type="error" message="Campos vacios" />);
      setTimeAlertError(true);
      setTimeout(() => {
        setTimeAlertError(false);
      }, 4000);
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      setViewAlert(
        <Alert
          type="error"
          message="El correo solo puede tener letras, numeros, puntos y guion bajo."
        />
      );
      setTimeAlertError(true);
      setTimeout(() => {
        setTimeAlertError(false);
      }, 4000);
    } else {
      const encriptado = encriptar(datosInputs.password);
      datosInputs.password = encriptado;
      datosInputs.emailProvider = "local";
      const res = await axios.post("/users", datosInputs);
      const decript = parseJwt(res.data);
      dispatch(setUser(decript));
      setViewAlert(<Alert type="ok" message="Registro creado." />);
      setTimeAlertError(true);
      setTimeout(() => {
        setTimeAlertError(false);
      }, 4000);
      window.localStorage.setItem("token", res.data);
      setDatosInputs({
        email: "",
        password: encriptado,
        name: "",
        surname: "",
        age: sessionStorage.getItem("age") ? sessionStorage.getItem("age") : "",
        image: "",
        emailProvider: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
      console.log("res post", res);
    }
  };

  return (
    <div className={s.form}>
      <div className={s.alert_age}>{viewAlertAge}</div>
      <form className={`${s.form__content} ${s.container}`}>
        <h1 className={s.form__title}>Register</h1>

        <div className={s.form__inputs}>
          <div className={s.form__group}>
            <label htmlFor="name" className={s.form__lbl}>
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name..."
              className={s.form__input}
              name="name"
              value={datosInputs.name}
              onChange={handleOnChangeInputs}
            />
          </div>

          <div className={s.form__group}>
            <label htmlFor="surname" className={s.form__lbl}>
              Surname:
            </label>
            <input
              id="surname"
              type="text"
              placeholder="Surname..."
              className={s.form__input}
              name="surname"
              value={datosInputs.surname}
              onChange={handleOnChangeInputs}
            />
          </div>

          <div className={s.form__group}>
            <label htmlFor="age" className={s.form__lbl}>
              Age:
            </label>
            <input
              id="age"
              type="number"
              className={s.form__input}
              name="age"
              value={datosInputs.age}
              onChange={handleOnChangeInputs}
            />
          </div>

          <div className={s.form__group}>
            <label htmlFor="image" className={s.form__lbl}>
              Image:
            </label>
            <input
              type="file"
              name="image"
              onChange={uploadImage}
              className={s.form__input}
            />
          </div>

          <div className={s.form__group}>
            <label htmlFor="email" className={s.form__lbl}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@email.com"
              className={s.form__input}
              name="email"
              value={datosInputs.email}
              onChange={handleOnChangeInputs}
            />
          </div>

          <div className={s.form__group}>
            <label htmlFor="password" className={s.form__lbl}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="....."
              className={s.form__input}
              name="password"
              value={datosInputs.password}
              onChange={handleOnChangeInputs}
            />
          </div>

          <input
            type="submit"
            className={s.form__submit}
            value="Register"
            onClick={onSubmit}
          />
          <GoogleButton
            type="light"
            label="Sign Up with Google"
            onClick={(e) => handleClickGoogle(e)}
          />
        </div>
        <div className={s.form__alert}>{timeAlertError && viewAlert}</div>
      </form>
    </div>
  );
}

export default Register;
