import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSort, getUpdate } from '../../redux/actions';
import s from "./AsideFilters.module.css";

const AsideFilters = () => {
  const dispatch = useDispatch()

  const handleSort = (e) => {
    dispatch(getSort(e.target.value))
    dispatch(getUpdate())
  }

  return (
    <aside className={s.container}>
      <p className={s.label}>CATEGORIES</p>
      <ul className={s.list}>
        <li>Ron</li>
        <li>Wine</li>
        <li>Gin</li>
        <li>Whisky</li>
        <li>Brandy</li>
        <li>Tequila</li>
        <li>Bourbon</li>
        <li>Mezcal</li>
        <li>Vodka</li>
        <li>Beer</li>
      </ul>
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
    </aside>
  );
};

export default AsideFilters;
