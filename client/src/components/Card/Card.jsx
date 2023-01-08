import React from "react";
import s from "./Card.module.css";

function Card({ id, img, name }) {
  return (
    <div className={s.card}>
      <img src={img} alt={`Image ${name}`} className={s.card__picture} />
      <h3 className={s.card__name}>{name}</h3>
    </div>
  );
}

export default Card;
