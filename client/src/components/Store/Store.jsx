import React from "react";
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

  useEffect(() => {
    dispatch(modifyBubbleCart(user))
  }, [dispatch])

  return (
    <div className={s.store}>
      <NavBar searchbar="true" />
      <div className={`${s.container} ${s.store__components}`}>
        <AsideFilters />
        <Cards />
      </div>
      <Footer />
      <BubbleCart />
    </div>
  );
}

export default Store;
