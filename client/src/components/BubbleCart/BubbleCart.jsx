import React from 'react';
import s from './BubbleCart.module.css'
import img from '../../assets/cart.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BubbleCart = () => {
    const bubbleCart = useSelector(state => state.bubbleCart)
    return (
        <>
            {
                bubbleCart
                    ? <Link to='/cart'>
                        <div className={s.container}>
                            <img className={s.img} src={img} alt="Shopping Cart" />
                            <div className={s.amount}>{bubbleCart}</div>
                        </div>
                    </Link>
                    : undefined
            }
        </>
    )
}

export default BubbleCart