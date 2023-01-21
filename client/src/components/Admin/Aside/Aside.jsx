import React from 'react';
import s from './Aside.module.css'
import img from '../../../assets/perfil.png'

const Aside = () => {
    return (
        <div className={s.container}>
            <div className={s.picContainer}>
                <div className={s.picture}>
                    <img className={s.img} src={img} alt="" />
                </div>
                <p className={s.name}>Nombre de usuario</p>
                <p className={s.admin}>Administrator</p>
            </div>
        </div>
    )
}

export default Aside