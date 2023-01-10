import React, { useState, useEffect } from 'react';
import s from './Details.module.css';
import NavBar from '../Navbar/Navbar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Button3 from '../Button3/Button3';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { modifyCart } from '../../redux/actions';
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader';

const Details = () => {

    const [detail, setDetail] = useState({})
    let { id } = useParams()
    const dispatch = useDispatch()
    const cartAmount = document.getElementById('amount')
    const cart = useSelector(state => state.cart)

    const getDetail = async () => {
        let res = await axios.get(`http://localhost:3001/products/${id}`)
        setDetail(res?.data)
    }
    useEffect(() => {
        getDetail()
    }, [])

    const handlerAdd = () => {
        dispatch(modifyCart(cartAmount.value))
        cartAmount.value = 1
    }

    return (
        <>
            <NavBar />
            <ShoppingCart />
            {
                Object.keys(detail).length
                    ? <div className={s.container}>
                        <div className={s.grid}>
                            <div>
                                <img className={s.img} src={detail.image ? detail.image : '#'} alt='img' />
                            </div>
                            <div>
                                <h1 className={s.name}>{detail?.name}</h1>
                                <p>⭐⭐⭐⭐⭐</p>
                                <div className={s.tags} >{detail.category?.category}</div>
                                <p className={s.price}>${detail?.price}</p>
                                <div className={s.itemsTextContainer}>
                                    {
                                        cart === 1
                                            ? <p className={s.itemsText}>An item in your bag</p> :
                                            cart > 1
                                                ? <p className={s.itemsText}>{cart} items in your bag </p>
                                                : undefined
                                    }
                                </div>
                                <div>
                                    <span className={s.bold}>Amount:</span>
                                    <input id='amount' className={s.inputAmount} type="number" defaultValue='1' min='1' maxLength='5' />
                                </div>
                                {
                                    cart
                                        ? <div className={s.buttons}>
                                            <ButtonPrimary handlerAdd={handlerAdd} value='Add more' />
                                            <Button3 value='Pay Now' />
                                        </div>
                                        : <div className={s.buttons}> <Button3 handlerAdd={handlerAdd} value='Add' /> </div>
                                }

                                <p className={s.country}><span className={s.bold}>Country:</span> {detail.country?.country}</p>
                            </div>
                        </div>
                        <br></br>
                        <div className={s.description}>{detail.description}</div>
                    </div>
                    : <Loader />
            }

            <br></br>
            <Footer />
        </>
    )
}

export default Details