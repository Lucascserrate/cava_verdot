import React, {useState, useEffect} from 'react'
import s from './NavbarClient.module.css'
import logo from '../../../assets/Logo_cava-verdot_blanco.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {clearUser, clearCart} from '../../../redux/actions'
import Button3 from '../../Button3/Button3'

function NavbarClient() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [vistaBtnLogin, setVistaBtnLogin] = useState();

  const getToken = window.localStorage.getItem("token");
  const getUserId = window.localStorage.getItem("userId");

  const cerrarSesion = () => {
    window.localStorage.removeItem("token");
    dispatch(clearUser());
    if (getUserId) {
      window.localStorage.removeItem("userId");
    }
    dispatch(clearCart());
    navigate("/login");
  };

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

  return (
    <div className={s.navbarclient}>
      <div className={s.navbarclient__content}>
        <Link to={'/'} className={s.navbarclient__link}>
          <img src={logo} alt="logo" className={s.navbarclient__logo} />
        </Link>
        <div>
          {vistaBtnLogin}
        </div>
      </div>
    </div>
  )
}

export default NavbarClient