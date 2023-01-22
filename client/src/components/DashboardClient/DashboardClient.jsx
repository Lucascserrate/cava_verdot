import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./DashboardClient.module.css";
import { useNavigate } from "react-router-dom";
import { parseJwt } from "../../functions/parseTokenJwt";
import { getUserById } from "../../redux/actions";
import axios from "axios";
import Error from "../Error/Error";

function DashboardClient() {
  const stateUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getToken = window.localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken) {
      navigate("/login");
    } else {
      const getId = async () => {
        let decoding = await parseJwt(getToken);
        dispatch(getUserById(decoding.id));
      };
      getId();
    }
  }, [getToken]);

  const refEmail = useRef(null);
  const refAge = useRef(null);

  const [email, setCurrentEmail] = useState();
  const [age, setCurrentAge] = useState();

  const [editEmail, setEditEmail] = useState(false);
  const [editAge, setEditAge] = useState(false);

  useEffect(()=>{
    setCurrentEmail(stateUser?.email)
    setCurrentAge(stateUser?.age)
  },[stateUser])

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
    const res = await axios.put(`/users/${stateUser?.id}`, {email: email})
    console.log(email);
    setEditEmail(false)
    console.log(res);
  }

  const handleSaveAge = async () => {
    const res = await axios.put(`/users/${stateUser.id}`, {age:age})
    setEditAge(false)
  }


  return (
    <>
      {getToken ? (
        <div className={s.dashboard}>
          <div className={`${s.dashboard__content} ${s.container}`}>
            <div className={s.dashboard__cabecera}>
              <figure className={s.dashboard__picture}>
                <img
                  src={stateUser?.image}
                  alt="image user"
                  className={s.dashboard__img}
                />
              </figure>
              <h2 className={s.dashboard__fullname}>
                {stateUser ? stateUser.name + " " + stateUser.surname : ""}
              </h2>
            </div>

            <div>
              <div className={s.dashboard__data}>
                {editEmail ? (
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