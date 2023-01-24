import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./DashboardClient.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboardClient.css";
import Error from "../Error/Error";
import NavbarClient from "./NavbarClient/NavbarClient";
import { useDispatch } from "react-redux";
import { setUser } from '../../redux/actions';
import Footer from '../Footer/Footer'

function DashboardClient() {
  const stateUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // estados que guardan los nuevos valores
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  // objeto contenedor
  let nuevoObjeto = {
    age: age ? age : stateUser.age,
    email: email ? email : stateUser.email,
    emailProvider: "local",
    exp: 1674521169,
    iat: 1674510369,
    id: stateUser.id,
    image: image ? image : stateUser.image,
    name: name ? name : stateUser.name,
    role: 2,
    surname: surname ? surname : stateUser.surname
  }

  // enviar alerta de error o confirmacion
  const [alert, setAlert] = useState("")

  // estos estados ocultan el modal para luego ser modificados al dar click con las funciones manejadora
  const [modalEmail, setModalEmail] = useState("hidden");
  const [modalAge, setModalAge] = useState("hidden");
  const [modalImage, setModalImage] = useState("hidden");
  const [modalFullname, setModalFullname] = useState("hidden");

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [stateUser, window.localStorage.getItem("token")]);

  // obtenemos los datos de los inputs
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeImage = async (e) => {
    const files = e.target.files;
    const datas = new FormData();
    datas.append("file", files[0]);
    datas.append("upload_preset", "CAVA-verdot");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcxiks4ku/upload",
      {
        method: "POST",
        body: datas,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  // manejadores del modal email 100% funcional
  const editEmail = () => {
    setModalEmail("show");
  };
  const closeModalEmail = () => {
    setModalEmail("hidden");
    setAlert("")
  };
  const handleSaveEmail = async () => {
    if(email.length === ""){
      setAlert("No se puede guardar un email vacio.")
      setTimeout(()=>{
        setAlert("")
      },2000)
    }
    if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
      setAlert("El correo solo puede tener letras, numeros, puntos y guion bajo.")
      setTimeout(()=>{
        setAlert("")
      },2000)
    }else{
      const res = await axios.put(`/users/${stateUser.id}`, { email: email });
      dispatch(setUser(nuevoObjeto));
      setAlert("Email modificado.")
      setTimeout(()=>{
        setAlert("")
        setModalEmail("hidden");
      },1000)
      setEmail("")
      window.localStorage.setItem("token", res.data)
    }
  };

  // manejadores del modal age 100% funcional
  const editAge = () => {
    setModalAge("show");
  };
  const closeModalAge = () => {
    setModalAge("hidden");
  };
  const handleSaveAge = async () => {
    if(!age){
      setAlert("No hay datos que modificar")
      setTimeout(()=>{
        setAlert("")
      },2000) 
    }else if(Number(age) < 18){
      setAlert("No puedes ser menor de edad")
      setTimeout(()=>{
        setAlert("")
      },2000) 
    }else{
      const res = await axios.put(`/users/${stateUser.id}`, { age: age });
      dispatch(setUser(nuevoObjeto));
      setAlert("Edad modificada")
      setTimeout(()=>{
        setAge("")
        setAlert("")
        setModalAge("hidden");
      })
      window.localStorage.setItem("token", res.data)
    }
  };

  // manejadores del modal image 100% funcional
  const editImage = () => {
    setModalImage("show");
  };
  const closeModalImage = () => {
    setModalImage("hidden");
  };
  const handleSaveImage = async () => {
    if(!image){
      setAlert("No hay datos que modificar")
      setTimeout(()=>{
        setAlert("")
      },2000) 
    }else{
      const res = await axios.put(`/users/${stateUser.id}`, { image: image });
      dispatch(setUser(nuevoObjeto));
      setAlert("Imagen modificada")
      setTimeout(()=>{
        setAlert("")
        setImage("")
        setModalImage("hidden");
      },2000)
      window.localStorage.setItem("token", res.data)
    }
  };

  // manejadores del fullname 100% funcional
  const editFullname = () => {
    setModalFullname("show")
  }
  const closeModalFullname = () => {
    setModalFullname("hidden")
  }
  const handleSaveFullname = async()=>{
    if(!name && !surname){
      setAlert("No hay datos que modificar")
      setTimeout(()=>{
        setAlert("")
      },2000) 
    }else if(name && surname){
      const res = await axios.put(`/users/${stateUser.id}`, { name: name, surname: surname });
      dispatch(setUser(nuevoObjeto));
      setAlert("name y surname modificados.")
      setTimeout(()=>{
        setAlert("")
        setName("");
        setSurname("");
        setModalFullname("hidden");
      },2000)
      window.localStorage.setItem("token", res.data)
    }else if(name && !surname){
      const res = await axios.put(`/users/${stateUser.id}`, { name: name });
      dispatch(setUser(nuevoObjeto));
      setAlert("name modificado.")
      setTimeout(()=>{
        setAlert("")
        setName("")
        setModalFullname("hidden");
      },2000)
      window.localStorage.setItem("token", res.data)
    }else if(surname && !name){
      const res = await axios.put(`/users/${stateUser.id}`, { surname: surname });
      dispatch(setUser(nuevoObjeto));
      setAlert("surname modificado.")
      setTimeout(()=>{
        setAlert("")
        setSurname("")
        setModalFullname("hidden");
      },2000)
      window.localStorage.setItem("token", res.data)
    }

  }

  return (
    <>
      {window.localStorage.getItem("token") ? (
        <div className={s.dashboard}>
          <NavbarClient />
          <div className={`${s.dashboard__content} ${s.container}`}>
            <div className={s.dashboard__cabecera}>
              {/* TODO image */}
              <div>
                {stateUser?.emailProvider === "local" ? (
                  <>
                    <figure
                      className={s.dashboard__picture}
                      onClick={editImage}
                    >
                      <img
                        src={stateUser?.image}
                        alt="user"
                        className={s.dashboard__img}
                      />
                      <figcaption className={s.dashboard__picoverlay}>
                        <p>
                          <span class="material-symbols-outlined">
                            add_a_photo
                          </span>
                        </p>
                      </figcaption>
                    </figure>
                    <div className={`${modalImage}`}>
                      <div className="modal__content modal__content--img">
                        <div className="modal__elements modal__elements--img">
                          <input
                            type="file"
                            className="input__edit input__edit--img"
                            onChange={handleChangeImage}
                          />
                          <div className="modal__border">
                            <img src={image} alt="" className="moda__preview" />
                          </div>
                          <button
                            onClick={handleSaveImage}
                            className="modal__save"
                          >
                            <span className="material-symbols-outlined modal__icon--save">
                              save
                            </span>
                          </button>
                        </div>
                        <button
                          className="modal__close"
                          onClick={closeModalImage}
                        >
                          ✖
                        </button>
                        <label className="modal__alert">{alert && alert}</label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <figure className={s.dashboard__picture}>
                      <img
                        src={stateUser?.image}
                        alt="user"
                        className={s.dashboard__img}
                      />
                    </figure>
                  </>
                )}
              </div>

              {/* TODO: name y surname */}
              <div className={s.dashboard__fullname}>
                <h2 className={s.dashboard__name}>{stateUser.name}</h2>
                <h2 className={s.dashboard__surname}>
                  {stateUser.surname ? stateUser.surname : ""}
                </h2>
                <button onClick={editFullname} className={s.dashboard__edit}>
                  <span className="material-symbols-outlined modal__icon--edit">edit</span>
                </button>
                <div className={`${modalFullname}`}>
                  <div className="modal__content modal__content--fullname">
                    <div className="modal__elements modal__elements--fullname">
                      <input
                        type="text"
                        placeholder="New name..."
                        className="input__edit"
                        value={name}
                        onChange={handleChangeName}
                      />
                      <input
                        type="text"
                        placeholder="New surname..."
                        className="input__edit"
                        value={surname}
                        onChange={handleChangeSurname}
                      />
                      <button onClick={handleSaveFullname} className="modal__save">
                        <span className="material-symbols-outlined modal__icon--save">
                          save
                        </span>
                      </button>
                    </div>
                    <button className="modal__close" onClick={closeModalFullname}>
                      ✖
                    </button>
                    <label className="modal__alert">{alert && alert}</label>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.dashboard__edit}>
              <h2>Datos Personales</h2>
              {/* TODO: email */}
              <div className={s.dashboard__data}>
                {stateUser?.emailProvider === "local" ? (
                  <>
                    <button onClick={editEmail} className={s.dashboard__edit}>
                      <span className="material-symbols-outlined modal__icon--edit">edit</span>
                    </button>
                    <p className={s.dashboard__text}>
                      Email: <span>{stateUser.email}</span>
                    </p>
                    <div className={`${modalEmail}`}>
                      <div className="modal__content">
                        <div className="modal__elements">
                          <input
                            type="text"
                            placeholder="New email..."
                            className="input__edit"
                            value={email}
                            onChange={handleChangeEmail}
                          />
                          <button
                            onClick={handleSaveEmail}
                            className="modal__save"
                          >
                            <span className="material-symbols-outlined modal__icon--save">
                              save
                            </span>
                          </button>
                        </div>
                        <button
                          className="modal__close"
                          onClick={closeModalEmail}
                        >
                          ✖
                        </button>
                        <label className="modal__alert">{alert && alert}</label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Email: <span>{stateUser.email}</span>
                    </p>
                  </>
                )}
              </div>

              {/* TODO: age */}
              <div className={s.dashboard__data}>
                <button onClick={editAge} className={s.dashboard__edit}>
                  <span className="material-symbols-outlined modal__icon--edit">edit</span>
                </button>
                <p className={s.dashboard__text}>
                  Age: <span>{stateUser.age}</span>
                </p>
                <div className={`${modalAge}`}>
                  <div className="modal__content">
                    <div className="modal__elements">
                      <input
                        type="text"
                        placeholder="New age..."
                        className="input__edit"
                        value={age}
                        onChange={handleChangeAge}
                      />
                      <button onClick={handleSaveAge} className="modal__save">
                        <span className="material-symbols-outlined modal__icon--save">
                          save
                        </span>
                      </button>
                    </div>
                    <button className="modal__close" onClick={closeModalAge}>
                      ✖
                    </button>
                    <label className="modal__alert">{alert && alert}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}

export default DashboardClient;
