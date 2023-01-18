import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../../redux/actions';
import s from './Stock.module.css'

const Stock = () => {
    const dispatch = useDispatch()
    const drinks = useSelector(state => state.drinks)

    const [datos, setDatos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    let itemsPage = 12;


    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    /*     useEffect(() => {
            if (drinks) {
                setDatos([...drinks].splice(0, 12));
            }
        }, [drinks]);
    
        // next
        const next = () => {
            const totalElements = drinks.length;
            const nextPage = currentPage + 1;
            const index = nextPage * itemsPage;
            if (index >= totalElements) return;
            setDatos([...drinks].splice(index, itemsPage));
            setCurrentPage(nextPage);
        };
    
        // prev
        const prev = () => {
            const prevPage = currentPage - 1;
            if (prevPage < 0) return;
            const index = prevPage * itemsPage;
            setDatos([...drinks].splice(index, itemsPage));
            setCurrentPage(prevPage);
        }; */

    return (
        <div className={s.container}>
            <h2 className={s.title}>Stock</h2>
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

            </div>
        </div>
    )
}

export default Stock