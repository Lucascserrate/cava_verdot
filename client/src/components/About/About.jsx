import React from "react";
import image from "../../assets/PAGINA.jpg";
import { Link } from "react-router-dom";
import s from "./About.module.css";

function About() {
  return (
    <div>
      <>
        <Link to="/">
          <button className={s.form__submit}>Back Home</button>
        </Link>
      </>
      <div>
        <img src={image} className={s.image} />
      </div>
    </div>
  );
}

export default About;
