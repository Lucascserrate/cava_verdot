import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import s from './Cards.module.css';

function Cards() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(()=> {
    dispatch();
  },[]);
  
  return (
    <div className={s.cards}>
      <Card/>
    </div>
  )
}

export default Cards