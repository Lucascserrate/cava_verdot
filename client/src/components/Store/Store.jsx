import React from "react";
import s from "./Store.module.css";
import AsideFilters from "../AsideFilters/AsideFilters";
import Cards from "../Cards/Cards";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Store() {
  return (
    <div className={s.store}>
      <NavBar searchbar="true" />
      <div className={`${s.container} ${s.store__components}`}>
        <AsideFilters />
        <Cards />
      </div>
      <Footer />
      <ShoppingCart />
    </div>
  );
}

export default Store;
