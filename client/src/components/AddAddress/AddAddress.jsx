import React, { useState, useEffect } from "react";
import s from "./AddAddress.module.css";
import axios from "axios";

export default function AddAddressForm({ setDisplay }) {
  function Validate(currentInput) {
    let currentErrors = {};

    let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
    let RegExInputUsersressionNum = /^[0-9,$]*$/;

    //Validation Country/Region

    if (!currentInput.countryRegion) {
      currentErrors.countryRegion = "Country/Region name is required.";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(currentInput.countryRegion)) {
      currentErrors.countryRegion = "Only letters and spaces are allowed";
    }

    //Validation Province/State

    if (!currentInput.provinceState) {
      currentErrors.provinceState = "Province/State name is required.";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(currentInput.provinceState)) {
      currentErrors.provinceState = "Only letters and spaces are allowed";
    }

    // Validation Postal Code

    if (!RegExInputUsersressionNum.test(currentInput.postalCode))
      currentErrors.postalCode = "Only numbers are allowed.";
    if (!currentInput.postalCode)
      currentErrors.postalCode = "Postal Code is required.";

    // Validation Phone Number

    if (!RegExInputUsersressionNum.test(currentInput.phoneNumber))
      currentErrors.phoneNumber = "Only numbers are allowed.";
    if (!currentInput.phoneNumber)
      currentErrors.phoneNumber = "Phone Number is required.";

    //Validation Street Name

    if (!currentInput.streetName) {
      currentErrors.name = "Street name is required.";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(currentInput.streetName)) {
      currentErrors.name = "Only letters and spaces are allowed";
    }

    // Validation Street Number

    if (!RegExInputUsersressionNum.test(currentInput.streetNumber))
      currentErrors.streetNumber = "Only numbers are allowed.";
    if (!currentInput.streetNumber)
      currentErrors.streetNumber = "Street Number is required.";

    return currentErrors;
  }

  //Saves data from inputs
  const [data, setData] = useState({
    countryRegion: "",
    provinceState: "",
    postalCode: "",
    phoneNumber: "",
    streetName: "",
    streetNumber: "",
  });

  //Catches validation errors
  const [currentErrors, setCurrentErrors] = useState({});

  //Registers changes on the form inputs
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setCurrentErrors(Validate({ ...data, [input.name]: input.value }));
  };

  //Sends the data to backend, refreshes, restarts states and captures errors
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setDisplay(false);

    try {
      // const res = await axios.post(`/products`, data);

      console.log("estas dandole a submit");
      alert("Producto creado con éxito");
      setData({
        countryRegion: "",
        provinceState: "",
        postalCode: "",
        phoneNumber: "",
        streetName: "",
        streetNumber: "",
      });
    } catch (error) {
      if (error) {
        console.log(data);
      }
    }
  };

  return (
    <div className={s.form}>
      <button onClick={() => setDisplay(false)} className={s.close}>
        ✖
      </button>
      <form
        className={`${s.form__content} ${s.container}`}
        onSubmit={handleSubmit}
      >
        <h1 className={s.form__title}>Add an Address</h1>
        <div className={s.form__inputs}>
          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="text"
              id="country"
              name="country"
              placeholder=" "
              value={data.countryRegion}
              onChange={handleChange}
            />
            <label disabled htmlFor="country" className={s.form__lbl}>
              Country/Region:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.countryRegion && (
              <p className={s.error}>{currentErrors.countryRegion}</p>
            )}
          </div>

          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="text"
              id="province"
              name="province"
              placeholder=" "
              value={data.provinceState}
              onChange={handleChange}
            />
            <label disabled htmlFor="province" className={s.form__lbl}>
              Country/Region:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.provinceState && (
              <p className={s.error}>{currentErrors.provinceState}</p>
            )}
          </div>

          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="number"
              id="postalCode"
              name="postalCode"
              placeholder=" "
              value={data.postalCode}
              onChange={handleChange}
            />
            <label disabled htmlFor="postalCode" className={s.form__lbl}>
              Postal Code:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.postalCodeState && (
              <p className={s.error}>{currentErrors.postalCodeState}</p>
            )}
          </div>

          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder=" "
              value={data.phoneNumber}
              onChange={handleChange}
            />
            <label disabled htmlFor="phoneNumber" className={s.form__lbl}>
              Phone Number:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.phoneNumber && (
              <p className={s.error}>{currentErrors.phoneNumber}</p>
            )}
          </div>

          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="text"
              id="streetName"
              name="streetName"
              placeholder=" "
              value={data.streetName}
              onChange={handleChange}
            />
            <label disabled htmlFor="streetName" className={s.form__lbl}>
              Street Name:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.streetName && (
              <p className={s.error}>{currentErrors.streetName}</p>
            )}
          </div>

          <div className={s.form__group}>
            <input
              className={s.form__input}
              type="number"
              id="streetNumber"
              name="streetNumber"
              placeholder=" "
              value={data.streetNumber}
              onChange={handleChange}
            />
            <label disabled htmlFor="streetNumber" className={s.form__lbl}>
              Street Number:
            </label>
            <span className={s.form__bar}></span>
          </div>
          <div className={s.form__message}>
            {currentErrors.streetNumber && (
              <p className={s.error}>{currentErrors.streetNumber}</p>
            )}
          </div>

          <button type="submit" className={s.btn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
