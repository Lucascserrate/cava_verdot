import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import s from './Cards.module.css';
import {getDrinks} from '../../redux/actions'

function Cards() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.drinks.data)

  useEffect(()=> {
    dispatch(getDrinks());
  },[dispatch]);
  

  return (
    <div className={s.cards}>
      {state?.map((e) => (
        <Link key={e.id} className={s.cards__link}>
          <Card img={e.image} name={e.name} />
        </Link>
      ))}
    </div>
  );
}

export default Cards