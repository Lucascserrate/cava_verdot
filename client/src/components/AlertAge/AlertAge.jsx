import React, {useState} from "react";
import s from "./AlertAge.module.css";
import logo from "../../assets/Logo_cava-verdot.svg";
import Button3 from "../Button3/Button3";
import './AlertAge.css'

function AlertAge() {

  const [view, setView] = useState(null)
  const [messageError, setMessageError] = useState("");
  const [captureInputs, setCaptureInput] = useState({
    dia: "",
    mes: "",
    anio: "",
  });

  const handleOnChange = (e) => {
    setCaptureInput({...captureInputs, [e.target.name]: e.target.value});
  }

  const date = new Date();
  const year = date.getFullYear();
  const age = Number(year) - Number(captureInputs.anio);

  const handleOnClick = (e) => {
    e.preventDefault();
    if(captureInputs.dia === "" || captureInputs.mes === "" || captureInputs.anio === ""){
      setMessageError("Ingrese los datos de edad");
    }else if(age < 18){
      setMessageError("Eres menor de edad");
    }else{
      sessionStorage.setItem("dia", captureInputs.dia)
      sessionStorage.setItem("mes", captureInputs.mes)
      sessionStorage.setItem("anio", captureInputs.anio)
      sessionStorage.setItem("age", age)
      setView('alertage--view')
    }
  }

  return (
    <div className={`${s.alertage} ${view}`}>
      <div className={s.alertage__content}>
        <figure className={s.alertage__picture}>
          <img src={logo} alt="logo" className={s.alertage__img} />
        </figure>

        <form className={s.alertage__form}>
          <h2>Bienvenido</h2>
          <p>Por favor ingresa tu edad.</p>
          <div className={s.alertage__elements}>
            <input
              className={s.alertage__validate}
              type="number"
              required="required"
              size="2"
              placeholder="DD"
              max="31"
              min="1"
              name="dia"
              value={captureInputs.dia}
              onChange={handleOnChange}
            />
            <input
              className={s.alertage__validate}
              type="number"
              required="required"
              size="2"
              placeholder="MM"
              max="12"
              min="1"
              name="mes"
              value={captureInputs.mes}
              onChange={handleOnChange}
            />
            <input
              className={s.alertage__validate}
              type="number"
              required="required"
              size="4"
              placeholder="YYYY"
              max="9999"
              min="1900"
              name="anio"
              value={captureInputs.anio}
              onChange={handleOnChange}
            />
          </div>
          <Button3 value={"Continuar"} handler={handleOnClick}/>
          <label className={s.alertage__error}>{messageError}</label>
        </form>
      </div>
    </div>
  );
}

export default AlertAge;
