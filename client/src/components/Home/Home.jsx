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
    <div className={s.home}>
      <div className={s.alertage__component}>
        {viewAlert}
      </div>
      <Navbar />
      <div className={s.home__content}>

        <div className={s.home__header}>
          <div className={s.home__cabecera}>
            <h2 className={s.header}>Discover the best wines</h2>
            <p className={s.subHeader}>In Cava Verdot you will find the best wines at the best price</p>
          </div>
        </div>

        <div className={s.home__destacados}>
          <h2>Productos Destacados</h2>
        </div>

        <div className={s.home__carousel__products}>
          <CarouselSlide />
        </div>

        <div className={s.home__destacados}>
          <h2>Nuestras Marcas</h2>
        </div>

        <div className={s.home__carousel__products}>
          <Brands />
        </div>

        <BubbleCart />
        <BubbleWpp />
        {
          notification && <Notification setNotification={setNotification} />
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
