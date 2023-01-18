import React from 'react';
import Button3 from '../Button3/Button3';
import s from './Notification.module.css'

const Notification = ({ setNotification }) => {

    const handleClick = () => {
        setNotification(false)
        // setTimeout(() => setNotification(false), 5000)
    }

    return (
        <div className={s.container}>
            <button className={s.btn} onClick={() => handleClick()} >✖</button>
            <div className={s.flex}>
                <h2 className={s.title}>Suscribe to our newsletter</h2>
                <input className={s.email} type="email" placeholder='Email...' />
                <br />
                <div className={s.submit}>
                    <Button3 value='Subscribe' />
                </div>
            </div>
        </div>
    )
}
// dispara la accion al precionar el boton,  que el mail que le llegue(nodemailer) le ofresca promoción y link a register 
export default Notification