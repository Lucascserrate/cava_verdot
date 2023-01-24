import React, { useEffect } from 'react';
import s from './Ratings.module.css'
import { Rating } from '@mui/material'
import { useState } from 'react';
import img from "../../assets/perfil.png";
import { parseJwt } from "../../functions/parseTokenJwt";

const Ratings = ({ handlePostReview, value, setValue }) => {

    const [decodingToken, setDecodingToken] = useState()

    const getToken = window.localStorage.getItem("token");

    const handleChangeRate = (e) => {
        setValue({
            ...value,
            rate: parseInt(e.target.value)
        })
    }
    const handleChangeReview = (e) => {
        setValue({
            ...value,
            review: e.target.value
        })
    }

    useEffect(() => {
        if (getToken) {
            setDecodingToken(parseJwt(getToken))
        }
    }, [])
    console.log(value);
    return (
        <div className={s.container}>
            <div className={s.box}>
                <form onSubmit={() => handlePostReview()}>
                    <div className={s.rateBox}>

                        <p>Rate</p>
                        <Rating
                            name="simple-controlled"
                            value={value?.rate}
                            onChange={handleChangeRate}
                        />
                    </div>
                    {
                        value?.rate
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
                                    <button>Send</button>
                                </div>

                            </div>
                            : undefined
                    }
                </form>
            </div>
        </div>
    )
}

export default Ratings