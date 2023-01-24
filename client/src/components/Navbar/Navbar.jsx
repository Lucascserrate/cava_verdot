import s from "../Navbar/Navbar.module.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import logo from "../../assets/Logo_cava-verdot_blanco.svg";
import Button3 from "../Button3/Button3";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, clearCart } from "../../redux/actions";

export default function NavBar({ searchbar }) {
  const getToken = window.localStorage.getItem("token");
  const getUserId = window.localStorage.getItem("userId");

  const stateUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cerrarSesion = () => {
    window.localStorage.removeItem("token");
    if (getUserId) window.localStorage.removeItem("userId");

    dispatch(clearUser())
    navigate("/login");
  };

  const [vistaBtnLogin, setVistaBtnLogin] = useState();
  const [viewDashboard, setViewDashboard] = useState();

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

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      if (stateUser.role === 3) {
        setViewDashboard(
          <Link to={"/admin"}>
            <img
              src={
                stateUser.image
                  ? stateUser.image
                  : "https://img2.freepng.es/20180325/wlw/kisspng-computer-icons-user-profile-avatar-5ab7528676bb25.9036280415219636544863.jpg"
              }
              alt="profile"
              className={s.image__profile}
            />
          </Link>
        );
      } else if (stateUser.role === 2) {
        setViewDashboard(
          <Link to={"/dashboard"}>
            <img
              src={
                stateUser.image
                  ? stateUser.image
                  : "https://img2.freepng.es/20180325/wlw/kisspng-computer-icons-user-profile-avatar-5ab7528676bb25.9036280415219636544863.jpg"
              }
              alt="profile"
              className={s.image__profile}
            />
          </Link>
        );
      }
    }
  }, [getToken, stateUser]);

  return (
    <div className={s.bg}>
      <div className={s.container}>
        <div className={s.left}>
          <Link to="/">
            {" "}
            <img className={s.img} src={logo} alt="logo" />
          </Link>
          <div className={s.navButtons}>
            <Link to="/store">
              <ButtonArrow value="Store" />
            </Link>
            <Link to="/about">
              <ButtonArrow value="About Us" />
            </Link>
          </div>
        </div>
        {searchbar && <SearchBar />}
        <div className={s.right}>
          {viewDashboard}
          {vistaBtnLogin}
        </div>
      </div>
    </div>
  );
}
