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
  }, [dispatch]);

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
          <p>Postal Code: {stateAddress.postalCode ? stateAddress.postalCode : ""}</p>
          <p>Phone: {stateAddress.phone ? stateAddress.phone : ""}</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Street Name: {stateAddress.streetName ? stateAddress.streetName : ""}</p>
          <p>Street NUmber: {stateAddress.streetNumber ? stateAddress.streetNumber : ""}</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Reference: {stateAddress.reference ? stateAddress.reference : ""}</p>
        </div>

        <div className={s.viewaddress__edit}></div>
      </div>
    </div>
  );
}

export default ViewAddress;
