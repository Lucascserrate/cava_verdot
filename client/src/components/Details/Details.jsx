import React, { useState, useEffect } from 'react';
import s from './Details.module.css';
import NavBar from '../Navbar/Navbar';
import BubbleCart from '../BubbleCart/BubbleCart';
import Button3 from '../Button3/Button3';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { modifyBubbleCart } from '../../redux/actions';
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const Details = () => {

    const [detail, setDetail] = useState({})
    let { id } = useParams()
    const dispatch = useDispatch()
    const cartAmount = document.getElementById('amount')
    const bubbleCart = useSelector(state => state.bubbleCart)

    const getDetail = async () => {
        let res = await axios.get(`/products/${id}`)
        setDetail(res?.data[0])
    }

    let user = window.localStorage.getItem('userId')

    useEffect(() => {
        getDetail()
        if(user){
            dispatch(modifyBubbleCart(user))
        }
    }, [dispatch])


    const handlerAdd = async () => {
        let user = window.localStorage.getItem('userId')
        if (user) {
            let post = await axios.post('/shopingCart?add=true', {
                userId: user,
                drinkId: id,
                amount: parseInt(cartAmount?.value)
            })
            if (Object.keys(post).length) {
                dispatch(modifyBubbleCart(user))
            }
            return post.data
        } else {
            let post = await axios.post('/shopingCart?add=true', {
                drinkId: id,
                amount: parseInt(cartAmount?.value)
            })
            window.localStorage.setItem('userId', post?.data.userId)
            let user = window.localStorage.getItem('userId')
            if (Object.keys(post).length) {
                dispatch(modifyBubbleCart(user))
            }
        }
        cartAmount.value = 1
    }


    return (
        <>
            <NavBar />
            <BubbleCart />
            {
                Object.keys(detail).length
                    ? <div className={s.container}>
                        <div className={s.grid}>
                            <div>
                                <img className={s.img} src={detail.image ? detail.image : '#'} alt='img' />
                            </div>
                            <div className={s.detailContainer}>
                                <h1 className={s.name}>{detail?.name}</h1>
                                <p>⭐⭐⭐⭐⭐</p>
                                <div className={s.tags} >{detail.category?.category}</div>
                                <p className={s.price}>${detail?.price}</p>
                                <div className={s.itemsTextContainer}>
                                    {
                                        bubbleCart === 1
                                            ? <p className={s.itemsText}>An item in your bag</p> :
                                            bubbleCart > 1
                                                ? <p className={s.itemsText}>{bubbleCart} items in your bag </p>
                                                : undefined
                                    }
                                </div>
                                <div>
                                    <span className={s.bold}>Amount:</span>
                                    <input id='amount' className={s.inputAmount} type="number" defaultValue='1' min='1' maxLength='5' />
                                </div>
                                {
                                    bubbleCart
                                        ? <div className={s.buttons}>
                                            <ButtonPrimary handler={() => handlerAdd()} value='Add more' />
                                            <Link className={s.buttons} to='/cart'> <Button3 value='Pay Now' /></Link>
                                        </div>
                                        : <div className={s.buttons}> <Button3 handler={() => handlerAdd()} value='Add' /> </div>
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