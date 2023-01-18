import React from 'react';
import s from './Prueba.module.css'

const Prueba = () => {
    return (
        <div className={s.container}>
            <div className={s.stockContainer}>
                <div className={s.stockItems}>
                    <div className={s.bold}>ID</div>
                    <div className={s.bold}>Name</div>
                    <div className={s.bold}>Category</div>
                    <div className={s.bold}>Stock</div>
                </div>

            </div>
        </div>
    )
}

export default Prueba