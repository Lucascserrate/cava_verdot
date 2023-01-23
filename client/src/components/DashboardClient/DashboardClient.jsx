import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./DashboardClient.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";

function DashboardClient() {
  const stateUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  const refEmail = useRef(null);
  const refAge = useRef(null);

  const [email, setCurrentEmail] = useState(stateUser?.email);
  const [age, setCurrentAge] = useState(stateUser?.age);

  const [editEmail, setEditEmail] = useState(false);
  const [editAge, setEditAge] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [stateUser, window.localStorage.getItem("token")]);
  console.log(stateUser);

  const handleEditEmail = () => {
    setEditEmail(true);
  };

  const handleEditAge = () => {
    setEditAge(true);
  };

  const handleChangeEmail = (e) => {
    setCurrentEmail(e.target.value);
  };

  const handleChangeAge = (e) => {
    setCurrentAge(e.target.value);
  };

  const handleSaveEmail = async () => {
    const res = await axios.put(`/users/${stateUser?.id}`, { email: email });
    console.log(email);
    setEditEmail(false);
    console.log(res);
  };

  const handleSaveAge = async () => {
    const res = await axios.put(`/users/${stateUser.id}`, { age: age });
    console.log(age);
    setEditAge(false);
    console.log(res);
  };

  return (
    <>
      {window.localStorage.getItem("token") ? (
        <div className={s.dashboard}>
          <div className={`${s.dashboard__content} ${s.container}`}>
            <div className={s.dashboard__cabecera}>
              <figure className={s.dashboard__picture}>
                <img
                  src={stateUser?.image}
                  alt="user"
                  className={s.dashboard__img}
                />
              </figure>
              <h2 className={s.dashboard__fullname}>
                {stateUser ? stateUser.name + " " + stateUser.surname : ""}
              </h2>
            </div>

            <div>
              <div className={s.dashboard__data}>
                {stateUser.emailProvider === "local" ? (
                  editEmail ? (
                    <>
                      <input
                        ref={refEmail}
                        type="text"
                        value={email}
                        onChange={handleChangeEmail}
                      />
                      <button onClick={handleSaveEmail}>
                        <span class="material-symbols-outlined">done</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={handleEditEmail}>
                        <span class="material-symbols-outlined">edit</span>
                      </button>
                      {email}
                    </>
                  )
                ) : (
                  <label>{email}</label>
                )}
              </div>

              <div className={s.dashboard__data}>
                {editAge ? (
                  <>
                    <input
                      ref={refAge}
                      type="text"
                      value={age}
                      onChange={handleChangeAge}
                    />
                    <button onClick={handleSaveAge}>
                      <span class="material-symbols-outlined">done</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={handleEditAge}>
                      <span class="material-symbols-outlined">edit</span>
                    </button>
                    {age}
                  </>
                )}
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
