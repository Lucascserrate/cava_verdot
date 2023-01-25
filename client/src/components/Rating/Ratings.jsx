import React, { useEffect } from 'react';
import s from './Ratings.module.css'
import { Rating } from '@mui/material'
import { useState } from 'react';
import img from "../../assets/perfil.png";
import { parseJwt } from "../../functions/parseTokenJwt";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Ratings = ({ id }) => {
    const [value, setValue] = useState({
        review: '',
        punctuation: 0
    })
    const navigate = useNavigate();

    const userId = useSelector(state => state.user)
    const [decodingToken, setDecodingToken] = useState()

    const getToken = window.localStorage.getItem("token");

    const handleChangeRate = (e) => {
        setValue({
            ...value,
            punctuation: parseInt(e.target.value)
        })
    }
    const handleChangeReview = (e) => {
        setValue({
            ...value,
            review: e.target.value
        })
    }

    const handlePostReview = async () => {
        if (userId.id === undefined) navigate('/login')
        else {
            await axios.post(`/products/review?userId=${userId?.id}&drinkId=${id}`, value)
        }

    }


    useEffect(() => {
        if (getToken) {
            setDecodingToken(parseJwt(getToken))
        }
    }, [])
    console.log(userId.id);
    return (
        <div className={s.container}>
            <div className={s.center}>
                <h2 className={s.title}>Customer ratings</h2>
                <div className={s.box}>
                    <form onSubmit={() => handlePostReview()}>
                        <div className={s.rateBox}>

                            <p>Rate</p>
                            <Rating
                                name="simple-controlled"
                                value={value?.punctuation}
                                onChange={handleChangeRate}
                            />
                        </div>
                        {
                            value?.punctuation
                                ? <div>
                                    <p>Review</p>
                                    <div className={s.reviewBox}>
                                        <div className={s.picture}>
                                            {
                                                decodingToken ?
                                                    <img className={s.img} src={decodingToken?.image} alt="imagen perfil" />
                                                    :
                                                    <img className={s.img} src={img} alt="img" />
                                            }
                                        </div>
                                        <textarea onChange={handleChangeReview} placeholder='Let us a review...' className={s.textarea} name="review" id="" cols="80" rows="6" ></textarea>
                                    </div>
                                    <div className={s.flexEnd}>
                                        <button className={s.btn}>Send</button>
                                    </div>

                                </div>
                                : undefined
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ratings