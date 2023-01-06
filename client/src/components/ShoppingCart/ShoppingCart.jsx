import React from 'react';
import s from './ShoppingCart.module.css'
import img from '../../assets/cart.png'
import { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState(1)

    return (
        <div className={s.container}>
            <img className={s.img} src={img} alt="Shooping Cart" />
            <div className={s.amount}>{cart}</div>
        </div>
    )
}

export default ShoppingCart