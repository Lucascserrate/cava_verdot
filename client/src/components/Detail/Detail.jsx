import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getDrinkId } from '../../redux/actions.js';
import { useParams } from 'react-router-dom';
import s from './Detail.module.css';

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.drink.data);

  useEffect(()=>{
    dispatch(getDrinkId(params.id))
  },[dispatch, params.id])

  console.log(state);
  return (
    <div className={s.details}>
      <section className={`${s.details__contain} ${s.container}`}>
        <figure className={s.details__picture}>
          <img
            src={state?.image}
            alt={`Image ${state?.name}`}
            className={s.details__img}
          />
        </figure>

        <div className={s.details__texts}>
          <div>
            <h2 className={s.details__title}>{state?.name}</h2>
          </div>

          <div className={s.details__description}>
            <ul>
              <li>Category: <span>{state?.category.category}</span></li>
              <li>From: <span>{state?.country.country}</span></li>
              <li>Description: <span>{state?.description}</span></li>
              <li>Price: <span>$ {state?.price} usd</span></li>
              <li>Rating: <span>{state?.rating}</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail