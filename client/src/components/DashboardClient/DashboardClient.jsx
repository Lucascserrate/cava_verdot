import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./DashboardClient.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboardClient.css";
import Error from "../Error/Error";
import NavbarClient from "./NavbarClient/NavbarClient";

function DashboardClient() {
  const stateUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  // estados que guardan los nuevos valores
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

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
    console.log(files);
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

  // manejadores del modal email
  const editEmail = () => {
    setModalEmail("show");
  };
  const closeModalEmail = () => {
    setModalEmail("hidden");
  };
  const handleSaveEmail = async () => {
    setModalEmail("hidden");
    const res = await axios.put(`/users/${stateUser.id}`, { email: email });
    console.log(res);
  };

  // manejadores del modal age
  const editAge = () => {
    setModalAge("show");
  };
  const closeModalAge = () => {
    setModalAge("hidden");
  };
  const handleSaveAge = async () => {
    setModalAge("hidden");
    const res = await axios.put(`/users/${stateUser.id}`, { age: age });
    console.log(res);
  };

  // manejadores del modal image
  const editImage = () => {
    setModalImage("show");
  };
  const closeModalImage = () => {
    setModalImage("hidden");
  };
  const handleSaveImage = async () => {
    setModalImage("hidden");
    const res = await axios.put(`/users/${stateUser.id}`, { image: image });
    console.log(res);
  };

  // manejadores del fullname
  const editFullname = () => {
    setModalFullname("show")
  }
  const closeModalFullname = () => {
    setModalFullname("hidden")
  }
  const handleSaveFullname = async()=>{
    setModalFullname("hidden");
    if(name && surname){
      const res = await axios.put(`/users/${stateUser.id}`, { name: name, surname: surname });
      console.log(res);
    }else if(name && !surname){
      const res = await axios.put(`/users/${stateUser.id}`, { name: name });
      console.log(res);
    }else if(surname && !name){
      const res = await axios.put(`/users/${stateUser.id}`, { surname: surname });
      console.log(res);
    }
  }

  return (
    <>
      {window.localStorage.getItem("token") ? (
        <div className={s.dashboard}>
          <NavbarClient/>
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
                        alt="image user"
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
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <figure className={s.dashboard__picture}>
                      <img
                        src={stateUser?.image}
                        alt="image user"
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
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <div className={`${modalFullname}`}>
                  <div className="modal__content modal__content--fullname">
                    <div className="modal__elements modal__elements--fullname">
                      <input
                        type="text"
                        placeholder="New name..."
                        className="input__edit"
                        onChange={handleChangeName}
                      />
                      <input
                        type="text"
                        placeholder="New surname..."
                        className="input__edit"
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
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <p>
                      Email: <span>{stateUser.email}</span>
                    </p>
                    <div className={`${modalEmail}`}>
                      <div className="modal__content">
                        <div className="modal__elements">
                          <input
                            type="text"
                            placeholder="New email..."
                            className="input__edit"
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
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <p>
                  Age: <span>{stateUser.age}</span>
                </p>
                <div className={`${modalAge}`}>
                  <div className="modal__content">
                    <div className="modal__elements">
                      <input
                        type="text"
                        placeholder="New age..."
                        className="input__edit"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}

export default DashboardClient;
