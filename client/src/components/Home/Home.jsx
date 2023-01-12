import React from "react";
import s from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import CarouselSlide from "../Carousel/Carousel";
import BubbleWpp from "../BubbleWpp/BubbleWpp";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className={s.container}>
      <Navbar searchbar="true" />
      <div className={s.home__content}>
        <CarouselSlide />
      </div>
      <ShoppingCart />
      <BubbleWpp />
      <Footer />
    </div>
  );
};

export default Home;
