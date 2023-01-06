import React from 'react';
import s from './Button1.module.css'

const Button1 = ({ value }) => {
    return (
        <>
            <button className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default Button1