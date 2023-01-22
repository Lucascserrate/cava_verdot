import React, { useState, useEffect } from "react";
import s from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import CarouselSlide from "../Carousel/Carousel";
import BubbleWpp from "../BubbleWpp/BubbleWpp";
import BubbleCart from "../BubbleCart/BubbleCart";
import Footer from "../Footer/Footer";
import Notification from '../Notification/Notification';
import AlertAge from "../AlertAge/AlertAge";
import { modifyBubbleCart } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Brands from '../Brands/Brands';
import imgHeader from '../../assets/vinedo.jpg'
import copa from '../../assets/copaVino.jpg'

const Home = () => {
  const dispatch = useDispatch()
  const [notification, setNotification] = useState(true)
  const [viewAlert, setViewAlert] = useState();
  const bubbleCart = useSelector(state => state.bubbleCart);
  useEffect(() => {
    let dia = sessionStorage.getItem("dia");
    let mes = sessionStorage.getItem("mes");
    let anio = sessionStorage.getItem("anio");
    let getToken = window.localStorage.getItem("token")
    let user = window.localStorage.getItem('userId')


    if (bubbleCart) dispatch(modifyBubbleCart(user))

    // si no existe un usuario logueado le muestra la alerta de edad
    if (!getToken) {
      if (!dia && !mes && !anio) {
        setTimeout(() => {
          setViewAlert(
            <AlertAge />
          )
        }, 2000)
      }
    }
  }, []);
  return (
    <div className={s.container}>
      <div className={s.alertage__component}>
        {viewAlert}
      </div>
      <Navbar />
      <div className={s.headerContainer}>
        <div className={s.headerBox}>
          <h2 className={s.header}>Descubri los mejores vinos</h2>
          <p className={s.subHeader}>En Cava Verdot vas a encontrar los mejores vinos al mejor precio</p>
        </div>
        <img className={s.imgHeader} src={imgHeader} alt="vinedo" />
      </div>
      <div className={s.home__content}>
        <div className={s.featured}>
          <img className={s.copa} src={copa} alt="" />
          <CarouselSlide />
        </div>
        <Brands />
      </div>
      <BubbleCart />
      <BubbleWpp />
      {
        /* notification && setTimeout(() => (<Notification setNotification={setNotification} />), 100) */
        notification && <Notification setNotification={setNotification} />
      }
      <Footer />
    </div>
  );
};

export default Home;
