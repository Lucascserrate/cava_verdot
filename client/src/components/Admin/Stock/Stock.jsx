import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../../redux/actions';
import s from './Stock.module.css'

const Stock = ({ setDisplay }) => {
    const dispatch = useDispatch()
    const drinks = useSelector(state => state.drinks)

    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    return (
        <div className={s.container}>
            <h2 className={s.title}>Stock</h2>
            <h3 className={s.subtitle}>All our products are here</h3>
            <div className={s.stockTitles}>
                <div className={s.bold}>ID</div>
                <div className={s.bold}>Name</div>
                <div className={s.bold}>Category</div>
                <div className={s.bold}>Stock</div>
            </div>
            <div className={s.stockContainer}>
                {
                    drinks.length ? drinks.map(e => <div key={e.id} className={s.stockItems}>
                        <div className={s.text}>{e.id}</div>
                        <div className={s.text}>{e.name}</div>
                        <div className={s.text}>{e.category?.category} </div>
                        <div className={s.text}>{e.stock}</div>
                    </div>
                    )
                        : undefined
                }
            </div>
            <div className={s.buttons}>
                <button onClick={() => setDisplay(true)} className={s.btn}  >Add</button>
            </div>
        </div>
    )
}

export default Stock