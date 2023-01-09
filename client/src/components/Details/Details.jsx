import React, { useState, useEffect } from 'react';
import s from './Details.module.css';
import NavBar from '../Navbar/Navbar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Button3 from '../Button3/Button3';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { modifyCart } from '../../redux/actions';
import Footer from '../Footer/Footer'

const Details = () => {

    const [detail, setDetail] = useState({})
    let { id } = useParams()
    const dispatch = useDispatch()
    const cartAmount = document.getElementById('amount')

    const getDetail = async () => {
        let res = await axios.get(`http://localhost:3001/products/${id}`)
        setDetail(res?.data)
    }
    useEffect(() => {
        getDetail()
    }, [])

    const handlerAdd = () => {
        dispatch(modifyCart(cartAmount.value))
    }

    return (
        <>
            <NavBar />
            <ShoppingCart />
            <div className={s.container}>
                <div className={s.grid}>
                    <div>
                        <img className={s.img} src={detail.image ? detail.image : '#'} alt='img' />
                    </div>
                    <div>
                        <h1 className={s.name}>{detail.name ? detail.name : 'Nombre del Producto'}</h1>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className={s.price}>${detail.price ? detail.price : 100}</p>
                        <div>
                            <span className={s.bold}>Amount:</span>
                            <input id='amount' className={s.inputAmount} type="number" defaultValue='1' min='1' maxLength='5' />
                        </div>
                        <div className={s.buttons}>
                            <ButtonPrimary handlerAdd={handlerAdd} value='Add' />
                            <Button3 value='Pay Now' />
                        </div>
                        {/* <p className={s.country}>{detail ? detail.country.country : 'Country'}</p> */}
                    </div>                                               
            </div>
            <br></br>
                <div>{detail.description}</div>  
            </div> 
            <br></br>
            <Footer />
        </>
    )
}

export default Details