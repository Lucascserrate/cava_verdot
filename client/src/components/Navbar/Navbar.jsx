import s from "../Navbar/Navbar.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import logo from "../../assets/Logo_cava-verdot_blanco.svg";
import Button3 from "../Button3/Button3";
import { getDrinks } from "../../redux/actions";

export default function NavBar({ searchbar }) {
  const getToken = window.localStorage.getItem("token");

  const navigate = useNavigate()

  const cerrarSesion = () => {
    window.localStorage.removeItem("token");
    navigate('/login')
  };

  const [vistaBtnLogin, setVistaBtnLogin] = useState();

  useEffect(() => {
    setVistaBtnLogin(
      getToken ? (
        <Button3 value="Sign Out" handler={cerrarSesion} />
      ) : (
        <Link to="/login">
          <Button3 value="Sign In" />
        </Link>
      )
    );
  }, [getToken]);

  console.log(getToken);

  return (
    <div className={s.bg}>
      <div className={s.container}>
        <div className={s.left}>
          <Link to="/">
            {" "}
            <img className={s.img} src={logo} alt="logo" />
          </Link>
          <ul className={s.navButtons}>
            <Link to="/store">
              <li>Store</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        {searchbar && <SearchBar />}
        <div className={s.right}>
          {vistaBtnLogin}
        </div>
      </div>
    </div>
  );
}
