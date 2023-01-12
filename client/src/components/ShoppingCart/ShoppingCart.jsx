import React from 'react';
import s from './ShoppingCart.module.css'
import img from '../../assets/cart.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart)
    return (
        <>
            {
                shoppingCart ?
                    <Link to='/cart'>
                        <div className={s.container}>
                            <img className={s.img} src={img} alt="Shopping Cart" />
                            <div className={s.amount}>{shoppingCart}</div>
                        </div>
                    </Link>
                    : undefined
            }

        </>
    )
}

export default ShoppingCart