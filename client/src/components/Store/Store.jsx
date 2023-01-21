import React, { useState } from "react";
import s from "./Store.module.css";
import AsideFilters from "../AsideFilters/AsideFilters";
import Cards from "../Cards/Cards";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BubbleCart from "../BubbleCart/BubbleCart";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modifyBubbleCart } from '../../redux/actions';

function Store() {
  const dispatch = useDispatch()
  let user = window.localStorage.getItem('userId')

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (user) dispatch(modifyBubbleCart(user))
  }, [dispatch, user])

  return (
    <div className={s.store}>
      <NavBar searchbar="true" />
      <div className={`${s.container} ${s.store__components}`}>
        <AsideFilters setCategory={setCategory} setCountry={setCountry} setPrice={setPrice} />
        <Cards category={category} country={country} price={price} setPrice={setPrice} />
      </div>
      <Footer />
      <BubbleCart />
    </div>
  );
}

export default Store;
