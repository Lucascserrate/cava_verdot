import React from 'react';
import s from './Button2.module.css'

const Button2 = ({ value, handler }) => {
    return (
        <>
            <button className={s.btn} onClick={handler} >
                {value}
            </button>
        </>
    )
}

export default Button2