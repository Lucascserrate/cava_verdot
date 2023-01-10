import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import s from './Cart.module.css'

const Cart = () => {
    return (
        <>
            <NavBar />
            <div className={s.container}>
                <div className={s.grid}>
                    <div className={s.cartList}>
                        <h2 className={s.title}>Shopping Cart</h2>
                        <hr />
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