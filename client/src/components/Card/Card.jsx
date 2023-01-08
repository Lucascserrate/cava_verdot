import React from "react";
import { Link } from 'react-router-dom';
import s from "./Card.module.css";

function Card({ id, img, name }) {
  return (
    <Link to={`/store/${id}`}>
      <div className={s.card}>
        <img src={img} alt={`Image ${name}`} className={s.card__picture} />
        <h3 className={s.card__name}>{name}</h3>
      </div>
    </Link>
  );
}

export default Card;
