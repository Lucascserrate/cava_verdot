import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSort,
  getAllCategories,
  getProductFilter,
  getCountries,
} from "../../redux/actions";
import s from "./AsideFilters.module.css";

const AsideFilters = () => {

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");


  const state = useSelector((state) => state.categories);
  const stateCountries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getCountries());
  }, [dispatch]);

  const handleSort = (e) => {
    dispatch(getSort(e.target.value));
  };

  // capturamos el valor de category
  const onChangeCategory = (e) => {
    setCategory(e.target.value)
  }

  // capturamos el valor de country
  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  // capturamos el valor de price
  const onChangePrice = (e) => {
    setPrice(e.target.value)
  }

  // despachamos la accion al dar clic al btn aplicar filtros
  const handleApplyFilter = () => {
    dispatch(getProductFilter(category, price, country))
    // si surge error, descomentar este codigo
    // console.log(`price = ${price} \n country = ${country} \n category = ${category}`);
  }
  

  return (
    <aside className={s.container}>
      <p className={s.label}>CATEGORIES</p>
      {state?.map((e) => (
        <div className={s.radioBox}  key={e.id}>
          <label>
            <div className={s.radioText}>
              <span>{e.category}</span>
              <input
                className={s.radio}
                type="radio"
                value={e.category}
                name="categories"
                onChange={onChangeCategory}
              />
            </div>
          </label>
        </div>
      ))}
      <p className={s.label}>PRICE</p>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>menor a 100</span>
            <input
              className={s.radio}
              type="radio"
              value="menor a 100"
              name="price"
              onChange={onChangePrice}
            />
          </div>
        </label>
      </div>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>de 100 a 300</span>
            <input
              className={s.radio}
              type="radio"
              value="de 100 a 300"
              name="price"
              onChange={onChangePrice}
            />
          </div>
        </label>
      </div>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>de 300 a 500</span>
            <input
              className={s.radio}
              type="radio"
              value="de 300 a 500"
              name="price"
              onChange={onChangePrice}
            />
          </div>
        </label>
      </div>
      <p className={s.label}>COUNTRIES</p>
      {stateCountries?.map((e) => (
        <div className={s.radioBox}  key={e.id}>
          <label>
            <div className={s.radioText}>
              <span>{e.country}</span>
              <input
                className={s.radio}
                type="radio"
                value={e.country}
                name="countries"
                onChange={onChangeCountry}
              />
            </div>
          </label>
        </div>
      ))}
      <div>
        <button onClick={handleApplyFilter}>Aplicar Filtros</button>
      </div>
      <p className={s.label}>SORT</p>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>Name(A-Z)</span>
            <input
              className={s.radio}
              type="radio"
              value="asc"
              name="sort"
              onChange={(e) => handleSort(e)}
            />
          </div>
        </label>
      </div>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>Name(Z-A)</span>
            <input
              className={s.radio}
              type="radio"
              value="desc"
              name="sort"
              onChange={(e) => handleSort(e)}
            />
          </div>
        </label>
      </div>
    </aside>
  );
};

export default AsideFilters;
