import React from 'react';
import s from './Button2.module.css'

const Button2 = ({ value }) => {
    return (
        <>
            <button className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default Button2