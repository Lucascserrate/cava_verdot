import React from "react";
import s from "./AlertAge.module.css";

function AlertAge() {
  return (
    <div className={s.alertage}>
      <div className={s.alertage__content}>
        <figure className={s.alertage__picture}>
          <img src="" alt="" className={s.alertage__img} />
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
            />
            <input
              className={s.alertage__validate}
              type="number"
              required="required"
              size="2"
              placeholder="MM"
              max="12"
              min="1"
            />
            <input
              className={s.alertage__validate}
              type="number"
              required="required"
              size="4"
              placeholder="YYYY"
              max="9999"
              min="1900"
            />
          </div>
          <input type="submit" className={s.alertage__confirm} value="Continuar" />
        </form>
      </div>
    </div>
  );
}

export default AlertAge;
