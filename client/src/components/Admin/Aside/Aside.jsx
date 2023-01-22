import React, { useState, useEffect } from "react";
import s from "./Aside.module.css";
import img from "../../../assets/perfil.png";
import { parseJwt } from "../../../functions/parseTokenJwt";

const Aside = () => {

  const [decodingToken, setDecodingToken] = useState()

  const getToken = window.localStorage.getItem("token");

  useEffect(() => {
    if (getToken) {
      setDecodingToken(parseJwt(getToken))
    }
  }, [])

  console.log(decodingToken);

  return (
    <div className={s.container}>
      <div className={s.picContainer}>
        <div className={s.picture}>
          {
            decodingToken ?
              <img className={s.img} src={decodingToken?.image} alt="imagen perfil" />
              :
              <img className={s.img} src={img} alt="img" />
          }
        </div>
        <p className={s.name}>{decodingToken?.surname ? decodingToken.name + ' ' + decodingToken.surname : decodingToken?.name}</p>
        <p className={s.admin}>Administrator</p>
      </div>
    </div>
  );
};

export default Aside;
