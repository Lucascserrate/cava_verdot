import React from 'react';
import s from './ShoppingCart.module.css'
import img from '../../assets/cart.png'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <>
            {
                cart ?
                    <div className={s.container}>
                        <img className={s.img} src={img} alt="Shooping Cart" />
                        <div className={s.amount}>{cart}</div>
                    </div>
                    : undefined
            }

        </>
    )
}

export default ShoppingCart