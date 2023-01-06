import React from 'react';
import s from './BubbleWpp.module.css'
import img from '../../assets/wppBubble.png'

const BubbleWpp = () => {
    return (
        <>
            <img className={s.img} src={img} alt="WhatsApp" />
        </>
    )
}

export default BubbleWpp