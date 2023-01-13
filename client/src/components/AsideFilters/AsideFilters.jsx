import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSort,
  getAllCategories,
  getProductFilter,
  getCountries,
} from "../../redux/actions";
import Button3 from "../Button3/Button3";
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
    dispatch(getProductFilter(category, price, country));
    // si surge error, descomentar este codigo
    // console.log(`price = ${price} \n country = ${country} \n category = ${category}`);
  }


  return (
    <aside className={s.container}>
      <section id="opt1" className={s.aside__section}>
        <a href="#opt1" className={s.label}>CATEGORIES</a>
        {state?.map((e) => (
          <div className={s.radioBox} key={e.id}>
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
      </section>
      
      <section id="opt2" className={s.aside__section}>
        <a href="#opt2" className={s.label}>PRICE</a>
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
      </section>

      <section id="opt3" className={s.aside__section}>
        <a href="#opt3" className={s.label}>COUNTRIES</a>
        {stateCountries?.map((e) => (
          <div className={s.radioBox} key={e.id}>
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
      </section>
      
      <section id="opt4" className={s.aside__section}>
        <a href="#opt4" className={s.label}>SORT</a>
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
      </section>

      <div>
        <Button3 value={'Aplicar Filtros'} handlerAdd={handleApplyFilter}/>
      </div>
    </aside>
  );
};

export default AsideFilters;
