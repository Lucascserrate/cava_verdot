import React from 'react';
import s from './Button3.module.css'

const Button3 = ({ value, handlerAdd }) => {
    return (
        <>
            <button className={s.btn} onClick={() => handlerAdd()} >
                {value}
            </button>
        </>
    )
}

export default Button3