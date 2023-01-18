import React from 'react';
import s from './BubbleWpp.module.css'
import img from '../../assets/wppBubble.png'

const BubbleWpp = () => {
    return (
        <a href="https://wa.link/hh5uqa">
            <img className={s.img} src={img} alt="WhatsApp" />
        </a>
    )
}

export default BubbleWpp