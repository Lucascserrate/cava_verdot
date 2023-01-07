import React from 'react';
import s from './Button3.module.css'

const Button3 = ({ value }) => {
    return (
        <>
            <button className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default Button3