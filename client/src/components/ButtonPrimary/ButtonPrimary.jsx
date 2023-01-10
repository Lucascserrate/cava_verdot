import React from 'react';
import s from './ButtonPrimary.module.css'

const ButtonPrimary = ({ value, handlerAdd }) => {
    return (
        <>
            <button onClick={() => handlerAdd()} className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default ButtonPrimary