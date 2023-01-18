import React from "react";
import s from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo_cava-verdot_blanco.svg";

const NavBar = () => {



  return (
    <div className={s.bg}>
      <div className={s.container}>
        <div className={s.left}>
          <Link to="/">
            <img className={s.img} src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar