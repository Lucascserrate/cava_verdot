import React from 'react';
import s from './Button3.module.css'

const Button3 = ({ value, handler }) => {
    return (
        <>
            <button className={s.btn} onClick={handler} >
                {value}
            </button>
        </>
    )
}

export default Button3