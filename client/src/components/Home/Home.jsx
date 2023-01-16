import React, { useState, useEffect } from "react";
import s from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import CarouselSlide from "../Carousel/Carousel";
import BubbleWpp from "../BubbleWpp/BubbleWpp";
import BubbleCart from "../BubbleCart/BubbleCart";
import Footer from "../Footer/Footer";
import Notification from '../Notification/Notification';
import AlertAge from "../AlertAge/AlertAge";

const Home = () => {
  const [notification, setNotification] = useState(true)
  const [viewAlert, setViewAlert] = useState();

  useEffect(()=>{
    let dia = sessionStorage.getItem("dia");
    let mes = sessionStorage.getItem("mes");
    let anio = sessionStorage.getItem("anio");

    if(!dia && !mes && !anio){
      setTimeout(()=>{
        setViewAlert(
          <AlertAge/>
        )
      }, 2000)
    }
  },[]);
  return (
    <div className={s.container}>
      <div className={s.alertage__component}>
        {viewAlert}
      </div>
      <Navbar searchbar="true" />
      <div className={s.home__content}>
        <CarouselSlide />
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
