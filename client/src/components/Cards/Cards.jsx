import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import s from "./Cards.module.css";
import { getDrinks, getProductFilter } from "../../redux/actions";
import arrowLeft from '../../assets/bxs-left-arrow.svg'
import arrowRight from '../../assets/bxs-right-arrow.svg'
import Loader from '../Loader/Loader';
import Button3 from '../Button3/Button3';
import Error from '../Error/Error';

function Cards({ category, price, country, setPrice }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.drinks);

  // estados del paginado
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  // creamos el paginado
  let itemsPage = 12;

  let totalElementsState = state?.length;
  const [totalPage, setTotalPage] = useState()

  // cuando se carguen los datos del state, llenamos datos
  useEffect(() => {
    if (state) {
      setDatos([...state].splice(0, 12));
      setTotalPage(parseInt(totalElementsState / itemsPage) + 1)
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

  // despachamos la accion al dar clic al btn aplicar filtros
  const handleApplyFilter = () => {
    console.log(price);
    dispatch(getProductFilter(category, price, country));
    // si surge error, descomentar este codigo
    // console.log(`price = ${price} \n country = ${country} \n category = ${category}`);
  };

  /* console.log(datos); */

  return (


    <div className={s.cards}>
      <div className={s.cards__paginado}>
        <Button3 value={"Aplicar Filtros"} handler={() => handleApplyFilter()} />
        <div className={s.arrows}>
          <button onClick={prev} className={s.btnLeft} ><img src={arrowLeft} alt="icon" className={s.cards__arrow} /></button>
          <label className={s.cards__currentpage}> {currentPage + 1} de {totalPage}</label>
          <button onClick={next} className={s.btnRight} ><img src={arrowRight} alt="icon" className={s.cards__arrow} /></button>
        </div>
      </div>
      <div className={s.cards__content}>
        {typeof datos[0] == 'object'
          ? datos.map((e) => (
            <Link to={`/store/${e.id}`} key={e.id} className={s.cards__link}>
              <Card id={e.id} img={e.image} name={e.name} />
            </Link>
          )) : typeof datos[0] == 'string'
            ? <Error />
            : <Loader />}
      </div>
    </div>
  );
}

export default Cards;
