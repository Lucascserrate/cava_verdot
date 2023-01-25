import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getAllStates,
  getAllCities,
  getAddressById,
} from "../../redux/actions";
import Button3 from "../Button3/Button3";
import axios from "axios";
import s from "./Address.module.css";

function Address() {
  const stateCountries = useSelector((state) => state.allCountries);
  const stateStates = useSelector((state) => state.allStates);
  const stateCities = useSelector((state) => state.allCities);
  const stateUser = useSelector((state) => state.user);
  const stateAddress = useSelector((state) => state.addressUser);

  let userId = stateUser.id;

  const dispatch = useDispatch();

  const [viewAlert, setViewAlert] = useState("");

  const [dataAddress, setDataAddress] = useState({
    countryId: "",
    stateId: "",
    cityId: "",
    postalCode: "",
    phone: "",
    streetName: "",
    streetNumber: "",
    reference: "",
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // manejadores de los selects
  const handleOnChangeCountry = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
    dispatch(getAllStates(e.target.value));
  };

  const handleOnChangeState = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
    dispatch(getAllCities(e.target.value));
  };

  const handleOnChangeCity = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  const handleOnChangePostal = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  const handleOnChangePhone = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  const handleOnChangeStreetName = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  const handleOnChangeStreetNumber = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  const handleOnChangeReference = (e) => {
    setDataAddress({ ...dataAddress, [e.target.name]: e.target.value });
  };

  // validador de guardado
  const handleOnSave = async () => {
    const {
      cityId,
      countryId,
      stateId,
      postalCode,
      phone,
      streetName,
      streetNumber,
      reference,
    } = dataAddress;
    if (
      !cityId ||
      !countryId ||
      !stateId ||
      !postalCode ||
      !phone ||
      !streetName ||
      !streetNumber ||
      !reference
    ) {
      setViewAlert(<p className={s.error}>empty fields.</p>);
      setTimeout(() => {
        setViewAlert("");
      }, 2000);
    } else if (!window.localStorage.getItem("token")) {
      setViewAlert(
        <p className={s.error}>Sign in to save address.</p>
      );
      setTimeout(() => {
        setViewAlert("");
      }, 2000);
    } else {
      if (!Object.keys(stateAddress).length) {
        const res = await axios.post(`/users/address/${userId}`, dataAddress);
        dispatch(getAddressById(stateUser.id));
        setViewAlert(<p className={s.ok}>saved address.</p>);
        setTimeout(() => {
          setDataAddress({
            countryId: "",
            stateId: "",
            cityId: "",
            postalCode: "",
            phone: "",
            streetName: "",
            streetNumber: "",
            reference: "",
          });
          setViewAlert("");
        }, 2000);
        console.log(res);
      } else {
        setViewAlert(<p className={s.error}>The address already exists.</p>);
        setTimeout(() => {
          setViewAlert("");
        }, 2000);
      }
    }
  };

  // validador del modificar
  const handleOnPut = async () => {
    const {
      cityId,
      countryId,
      stateId,
      postalCode,
      phone,
      streetName,
      streetNumber,
      reference,
    } = dataAddress;
    if (
      !cityId &&
      !countryId &&
      !stateId &&
      !postalCode &&
      !phone &&
      !streetName &&
      !streetNumber &&
      !reference
    ) {
      setViewAlert(<p className={s.error}>There is no data to modify</p>);
      setTimeout(() => {
        setViewAlert("");
      }, 2000);
    } else {
      if (Object.keys(stateAddress).length) {
        console.log(dataAddress);
        const res = await axios.put(
          `/users/address/${stateUser.id}`,
          dataAddress
        );
        console.log(res);
        setViewAlert(<p className={s.ok}>modified address.</p>);
        setTimeout(() => {
          setDataAddress({
            countryId: "",
            stateId: "",
            cityId: "",
            postalCode: "",
            phone: "",
            streetName: "",
            streetNumber: "",
            reference: "",
          });
          setViewAlert("");
        }, 2000);
      } else {
        setViewAlert(
          <p className={s.error}>You must create an address first.</p>
        );
        setTimeout(() => {
          setViewAlert("");
        }, 2000);
      }
    }
  };

  return (
    <div className={s.address}>
      <h1 className={s.address__title}>Address</h1>
      <div className={s.address__selects}>
        <div className={s.address__countries}>
          <select
            onChange={handleOnChangeCountry}
            name={"countryId"}
            className={s.address__select}
          >
            <option value="defaultCountries" selected disabled>
              Select country
            </option>
            {stateCountries?.length &&
              stateCountries.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
        </div>

        <div className={s.address__states}>
          <select
            onChange={handleOnChangeState}
            name={"stateId"}
            className={s.address__select}
          >
            <option value="defaultStates" selected disabled>
              Select state
            </option>
            {stateStates?.length &&
              stateStates.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
        </div>

        <div className={s.address__cities}>
          <select
            onChange={handleOnChangeCity}
            name={"cityId"}
            className={s.address__select}
          >
            <option value="defaultCities" selected disabled>
              Select city
            </option>
            {stateCities?.length &&
              stateCities.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className={s.address__inputs}>
        <div className={s.address__data}>
          <p>Postal Code.</p>
          <input
            className={s.address__input}
            type="number"
            value={dataAddress.postalCode}
            name={"postalCode"}
            placeholder={"000000..."}
            onChange={handleOnChangePostal}
          />
        </div>

        <div className={s.address__data__izq}>
          <p>Phone.</p>
          <input
            className={s.address__input}
            type="number"
            value={dataAddress.phone}
            name={"phone"}
            placeholder={"000000..."}
            onChange={handleOnChangePhone}
          />
        </div>
      </div>

      <div className={s.address__inputs}>
        <div className={s.address__data}>
          <p>Street Name.</p>
          <input
            className={s.address__input}
            type="text"
            value={dataAddress.streetName}
            name={"streetName"}
            placeholder={"Street..."}
            onChange={handleOnChangeStreetName}
          />
        </div>
        <div className={s.address__data__izq}>
          <p>Street Number.</p>
          <input
            className={s.address__input}
            type="text"
            value={dataAddress.streetNumber}
            name={"streetNumber"}
            placeholder={"#00-00..."}
            onChange={handleOnChangeStreetNumber}
          />
        </div>
      </div>

      <div className={s.address__reference}>
        <p>Reference.</p>
        <textarea
          className={s.address__textarea}
          name="reference"
          value={dataAddress.reference}
          placeholder={"Description..."}
          cols="20"
          rows="4"
          onChange={handleOnChangeReference}
        ></textarea>
      </div>

      <div className={s.address__finish}>
        <Button3 value={"Save"} handler={handleOnSave} />
        <Button3 value={"Modify"} handler={handleOnPut} />
      </div>

      <div className={s.address__alert}>{viewAlert && viewAlert}</div>
    </div>
  );
}

export default Address;
