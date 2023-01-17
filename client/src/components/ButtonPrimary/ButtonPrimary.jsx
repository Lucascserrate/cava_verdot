import React from 'react';
import s from './ButtonPrimary.module.css'

const ButtonPrimary = ({ value, handler }) => {
    return (
        <>
            <button onClick={handler} className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default ButtonPrimary