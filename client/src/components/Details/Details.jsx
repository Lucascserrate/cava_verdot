import React from 'react';
import s from './Details.module.css';
import img from '../../assets/3375734277.png'
import NavBar from '../Navbar/Navbar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Button3 from '../Button3/Button3';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Details = () => {
    return (
        <>
            <NavBar />
            <ShoppingCart />
            <div className={s.container}>
                <div className={s.grid}>
                    <div>
                        <img className={s.img} src={img} alt='img' />
                    </div>
                    <div>
                        <h1 className={s.name}>Nombre</h1>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className={s.price}>$1.890</p>
                        <div>
                            <span className={s.bold}>Cantidad:</span>
                            <input className={s.inputAmount} type="number" defaultValue='1' min='1' maxLength='5' />
                        </div>
                        <div className={s.buttons}>
                            <ButtonPrimary value='Add More' />
                            <Button3 value='Pay Now' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details