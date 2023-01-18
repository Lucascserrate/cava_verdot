import React, { useState } from "react";
import s from "./Register.module.css";
import Alert from "../Alert/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  let getAge = sessionStorage.getItem("age");

  const [viewAlert, setViewAlert] = useState();

  const [datosInputs, setDatosInputs] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    age: sessionStorage.getItem("age") ? sessionStorage.getItem("age") : "",
    address: "",
    image: "",
  });


  //Este handler convierte la imagen en base64
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setDatosInputs({
        ...datosInputs,
        image: reader.result,
      });
    };
  };

  const handleOnChangeInputs = (e) => {
    setDatosInputs({ ...datosInputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const {name, surname, password, image, email, address } = datosInputs
    e.preventDefault();

    if (!name || !surname || !password || !image || !email || !address) {
      setViewAlert(<Alert type="error" message="Campos vacios" />);
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
      setViewAlert(<Alert type="error" message="El correo solo puede tener letras, numeros, puntos y guion bajo." />);
    } else{
      const res = await axios.post("/users", datosInputs);
      setViewAlert(<Alert type="ok" message="Registro creado." />);
      window.localStorage.setItem("token", res.data);
      setDatosInputs({
        email: "",
        password: "",
        name: "",
        surname: "",
        age: sessionStorage.getItem("age") ? sessionStorage.getItem("age") : "",
        address: "",
        image: "",
      });
      setTimeout(()=>{
        navigate("/"); // modificar esta ruta para que redirija al dasboard del cliente
      },2000)
    }

  };

  return (
    <div className={s.form}>
      <form className={`${s.form__content} ${s.container}`}>
        <h1 className={s.form__title}>Register</h1>

        <div className={s.form__inputs}>
          <div>
            <div className={s.form__group}>
              <input
                id="name"
                type="text"
                placeholder=" "
                className={s.form__input}
                name="name"
                value={datosInputs.name}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="name" className={s.form__lbl}>
                Name:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                id="surname"
                type="text"
                placeholder=" "
                className={s.form__input}
                name="surname"
                value={datosInputs.surname}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="surname" className={s.form__lbl}>
                Surname:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                id="age"
                type="number"
                placeholder=" "
                className={s.form__input}
                name="age"
                value={datosInputs.age}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="age" className={s.form__lbl}>
                Age: {getAge}
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                id="address"
                type="text"
                placeholder=" "
                className={s.form__input}
                name="address"
                value={datosInputs.address}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="address" className={s.form__lbl}>
                Address:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                type="file"
                placeholder=" "
                name="image"
                onChange={handleImage}
                required
                className={s.form__input}
              />
              <label htmlFor="image" className={s.form__lbl}>
                Image:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                id="email"
                type="email"
                placeholder=" "
                className={s.form__input}
                name="email"
                value={datosInputs.email}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="email" className={s.form__lbl}>
                Email:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <div>
            <div className={s.form__group}>
              <input
                id="password"
                type="password"
                placeholder=" "
                className={s.form__input}
                name="password"
                value={datosInputs.password}
                onChange={handleOnChangeInputs}
              />
              <label htmlFor="password" className={s.form__lbl}>
                Password:
              </label>
              <span className={s.form__bar}></span>
            </div>
          </div>

          <input
            type="submit"
            className={s.form__submit}
            value="Register"
            onClick={onSubmit}
          />
        </div>

        <div className={s.form__alert}>{viewAlert}</div>
      </form>
    </div>
  );
}

export default Register;
