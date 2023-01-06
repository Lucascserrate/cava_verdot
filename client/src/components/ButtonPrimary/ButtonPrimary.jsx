import React from 'react';
import s from './ButtonPrimary.module.css'

const ButtonPrimary = ({ value }) => {
    return (
        <>
            <button className={s.btn} >
                {value}
            </button>
        </>
    )
}

export default ButtonPrimary