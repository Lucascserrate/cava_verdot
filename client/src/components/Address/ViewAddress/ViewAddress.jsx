import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressById } from "../../../redux/actions";
import s from "./ViewAddress.module.css";

function ViewAddress() {
  const stateUser = useSelector((state) => state.user);
  const stateAddress = useSelector((state) => state.addressUser);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAddressById(stateUser.id));
  }, [stateAddress]);

  return (
    <div className={s.viewaddress}>
      <h2 className={s.viewaddress__title}>You Address</h2>
      <div className={s.viewaddress__content}>
        <div className={s.viewaddress__data}>
          <p>{stateAddress.country ? stateAddress.country : ""}</p>
          <p>{stateAddress.state ? stateAddress.state : ""}</p>
          <p>{stateAddress.city ? stateAddress.city : ""}</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Cod. Postal: {stateAddress.postalCode ? stateAddress.postalCode : ""}</p>
          <p>Telefono: {stateAddress.phone ? stateAddress.phone : ""}</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Nombre calle: {stateAddress.streetName ? stateAddress.streetName : ""}</p>
          <p>Numero calle: {stateAddress.streetNumber ? stateAddress.streetNumber : ""}</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Referencia: {stateAddress.reference ? stateAddress.reference : ""}</p>
        </div>

        <div className={s.viewaddress__edit}></div>
      </div>
    </div>
  );
}

export default ViewAddress;
