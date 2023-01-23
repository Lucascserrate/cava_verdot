import React, { useEffect } from 'react';
import s from './Ratings.module.css'
import { Rating } from '@mui/material'
import { useState } from 'react';
import img from "../../assets/perfil.png";
import { parseJwt } from "../../functions/parseTokenJwt";

const Ratings = () => {
    const [value, setValue] = useState(0)
    const [decodingToken, setDecodingToken] = useState()

    const getToken = window.localStorage.getItem("token");

    useEffect(() => {
        if (getToken) {
            setDecodingToken(parseJwt(getToken))
        }
    }, [])
    console.log(value);
    return (
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.rateBox}>
                    <p>Rate</p>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                {
                    value
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
                                <textarea placeholder='Let us a review...' className={s.textarea} name="review" id="" cols="80" rows="6" ></textarea>
                            </div>

                        </div>
                        : undefined
                }

            </div>
        </div>
    )
}

export default Ratings