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
import "./aside.css";

const AsideFilters = () => {
  // estados para las vistas
  const [viewCat, setViewCat] = useState("aside__menu--hiden");
  const [viewPrice, setViewPrice] = useState("aside__menu--hiden");
  const [viewCountry, setViewCountry] = useState("aside__menu--hiden");
  const [viewSort, setViewSort] = useState("aside__menu--hiden");

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");

  const state = useSelector((state) => state.categories);
  const stateCountries = useSelector((state) => state.countries);
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
    setCategory(e.target.value);
  };

  // capturamos el valor de country
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  // capturamos el valor de price
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  // despachamos la accion al dar clic al btn aplicar filtros
  const handleApplyFilter = () => {
    dispatch(getProductFilter(category, price, country));
    // si surge error, descomentar este codigo
    // console.log(`price = ${price} \n country = ${country} \n category = ${category}`);
  };

  const handleOnClick = (e) => {
    if (e.target.name === "categories") {
      if (viewCat === null) {
        setViewCat("aside__menu--hiden");
      }
      if (viewCat !== null) {
        setViewCat(null);
        setViewPrice("aside__menu--hiden");
        setViewCountry("aside__menu--hiden");
        setViewSort("aside__menu--hiden");
      }
    }

    if (e.target.name === "price") {
      if (viewPrice === null) {
        setViewPrice("aside__menu--hiden");
      }
      if (viewPrice !== null) {
        setViewPrice(null);
        setViewCat("aside__menu--hiden");
        setViewCountry("aside__menu--hiden");
        setViewSort("aside__menu--hiden");
      }
    }

    if (e.target.name === "country") {
      if (viewCountry === null) {
        setViewCountry("aside__menu--hiden");
      }
      if (viewCountry !== null) {
        setViewCountry(null);
        setViewCat("aside__menu--hiden");
        setViewPrice("aside__menu--hiden");
        setViewSort("aside__menu--hiden");
      }
    }

    if (e.target.name === "sort") {
      if (viewSort === null) {
        setViewSort("aside__menu--hiden");
      }
      if (viewSort !== null) {
        setViewSort(null);
        setViewCat("aside__menu--hiden");
        setViewPrice("aside__menu--hiden");
        setViewCountry("aside__menu--hiden");
      }
    }
  };

  return (
    <aside className={s.container}>
      <section className='aside__section'>
        <a
          href="#"
          name="categories"
          className={viewCat}
          onClick={handleOnClick}
        >
          CATEGORIES
        </a>
        {state?.map((e) => (
          <div className={`${s.radioBox} aside__elements`} key={e.id}>
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


      <section className='aside__section'>
        <a href="#" name="price" className={viewPrice} onClick={handleOnClick}>
          PRICE
        </a>
        <div className="aside__elements">
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
        </div>
      </section>

      <section className='aside__section'>
        <a
          href="#"
          name="country"
          className={viewCountry}
          onClick={handleOnClick}
        >
          COUNTRIES
        </a>
        {stateCountries?.map((e) => (
          <div className={`${s.radioBox} aside__elements`} key={e.id}>
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

      <section className='aside__section'>
        <a href="#" name="sort" className={viewSort} onClick={handleOnClick}>
          SORT
        </a>
        <div className="aside__elements">
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
        </div>
      </section>

      <div>
        <Button3 value={"Aplicar Filtros"} handler={handleApplyFilter} />
      </div>
    </aside>
  );
};

export default AsideFilters;
