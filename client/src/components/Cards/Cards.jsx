import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import s from "./Cards.module.css";
import { getDrinks } from "../../redux/actions";
import arrowLeft from '../../assets/bxs-left-arrow.svg'
import arrowRight from '../../assets/bxs-right-arrow.svg'
import Loader from '../Loader/Loader';

function Cards() {
  // estados del paginado
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.drinks);

  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  // creamos el paginado
  let itemsPage = 15;

  // cuando se carguen los datos del state, llenamos datos
  useEffect(() => {
    if (state) {
      setDatos([...state].splice(0, 15));
    }
  }, [state]);

  // next
  const next = () => {
    const totalElements = state.length;
    const nextPage = currentPage + 1;
    const index = nextPage * itemsPage;
    if (index >= totalElements) return;
    setDatos([...state].splice(index, itemsPage));
    setCurrentPage(nextPage);
  };

  // prev
  const prev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const index = prevPage * itemsPage;
    setDatos([...state].splice(index, itemsPage));
    setCurrentPage(prevPage);
  };

  // console.log(datos);

  return (
    <div className={s.cards}>
      <div className={s.cards__content}>
        {datos.length
          ? datos.map((e) => (
            <Link to={`/store/${e.id}`} key={e.id} className={s.cards__link}>
              <Card id={e.id} img={e.image} name={e.name} />
            </Link>
          ))
          : <Loader />}
      </div>
      <div className={s.cards__paginado}>
        <button onClick={prev} className={s.cards__btn} ><img src={arrowLeft} alt="icon" className={s.cards__arrow} /></button>
        <label className={s.cards__currentpage}>Page: {currentPage + 1}</label>
        <button onClick={next} className={s.cards__btn} ><img src={arrowRight} alt="icon" className={s.cards__arrow} /></button>
      </div>
    </div>
  );
}

export default Cards;
