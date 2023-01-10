import React from 'react';
import s from './Loader.module.css'
import gif from '../../assets/loader3.gif'

const Loader = () => {
    return (
        <div className={s.container}>
            <img className={s.img} src={gif} alt="loader" />
        </div>
    )
}

export default Loader