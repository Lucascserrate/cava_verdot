
import React, { useEffect,/*  useState  */ } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getSort, getUpdate, getAllCategories, getCategoryProduct } from '../../redux/actions';
import s from "./AsideFilters.module.css";

const AsideFilters = () => {
  const state = useSelector(state => state.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const handleSort = (e) => {
    dispatch(getSort(e.target.value))
    dispatch(getUpdate())
  }

  console.log(state);

  return (
    <aside className={s.container}>
      <p className={s.label}>CATEGORIES</p>
      <ul className={s.list}>
        {
          state?.map(e => (
            <li key={e.id} ><button className={s.aside__btn} onClick={() => dispatch(getCategoryProduct(e.category))} value={e.category}>{e.category}</button></li>
          ))
        }
      </ul >
      <p className={s.label}>SORT</p>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>Name(A-Z)</span>
            <input className={s.radio} type="radio" value='asc' name="sort" onChange={(e) => handleSort(e)} />
          </div>
        </label>
      </div>
      <div className={s.radioBox}>
        <label>
          <div className={s.radioText}>
            <span>Name(Z-A)</span>
            <input className={s.radio} type="radio" value='desc' name="sort" onChange={(e) => handleSort(e)} />
          </div>
        </label>
      </div>
    </aside >
  );
};

export default AsideFilters;
