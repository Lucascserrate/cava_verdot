import React from "react";
import s from "./Card.module.css";

function Card({ id, img, name, price }) {
  return (
    <div className={s.card}>
      <img src={img} alt={`Image ${name}`} className={s.card__picture} />
      <div className={s.card__item}>
        <h3 className={s.card__name}>{name}</h3>
      </div>
    </div>
  );
}

export default Card;
