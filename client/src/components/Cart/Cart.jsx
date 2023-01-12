import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import s from './Cart.module.css'
import img from '../../assets/3375734277.png'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart)

    return (
        <>
            <NavBar />
            <div className={s.container}>
                <div className={s.grid}>
                    <div className={s.cartList}>
                        <h2 className={s.title}>Shopping Cart</h2>

                        <div className={s.cartItem}>
                            <img className={s.img} src={img} alt="" />
                            <div className={s.gridd}>
                                <div className={s.between}>
                                    <p className={s.itemTitle}>Vino cualquiera</p>
                                    <button className={s.close}>✖</button>
                                </div>
                                <div className={s.between}>
                                    <p className={s.amount}>Amount: 5</p>
                                    <p>$1000</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className={s.hr} />
                            <div className={s.total}>
                                <p className={s.totals}>Total</p>
                                <p className={s.totals}>$2500</p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    <div className={s.pay}>
                        <h2 className={s.title}>Payment Methods</h2>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart