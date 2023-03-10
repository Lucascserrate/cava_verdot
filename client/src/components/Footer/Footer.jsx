import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../assets/bxl-facebook-circle.svg'
import insta from '../../assets/bxl-instagram-alt.svg'
import logo from '../../assets/Logo_cava-verdot_blanco.svg'
import s from './Footer.module.css'

function Footer() {
  return (
    <footer className={s.footer}>
      <section className={`${s.footer__content} ${s.container}`}>
        <div className={`${s.footer__group} ${s.footer__uno}`}>
          <figure className={s.footer__picture}>
            <img src={logo} alt="Logo cavaverdot" className={s.footer__logo} />
          </figure>
          <p className={s.footer__copy}>
            All rights reserved &copy; 2023 CavaVerdot
          </p>
        </div>

        <div className={`${s.footer__group} ${s.footer__group__medio}`}>
          <Link to={"/"} className={s.footer__link}>
            Home
          </Link>
          <Link to={"/store"} className={s.footer__link}>
            Store
          </Link>
          <Link to={"/about"} className={s.footer__link}>
            About Us
          </Link>
        </div>

        <div className={`${s.footer__group} ${s.footer__tres}`}>
          <h3 className={s.footer__subtitle}>Social Networks</h3>
          <div className={s.footer__social}>
            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' className={s.footer__slink}><img src={fb} alt="icon facebook" className={s.footer__icon} /></a>
            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' className={s.footer__slink}><img src={insta} alt="icon instagram" className={s.footer__icon} /></a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer