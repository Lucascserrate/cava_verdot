import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/actions';
import img from "../../assets/perfil.png";
import { parseJwt } from '../../functions/parseTokenJwt';
import s from './Reviews.module.css'


const Reviews = ({ id }) => {
    const dispatch = useDispatch()
    const allReviews = useSelector(state => state.allReviews)

    useEffect(() => {
        dispatch(getReviews(id))
    }, [])

    return (
        <div className={s.container}>
            <div className={s.center}>
                <h2 className={s.title}>Reviews</h2>
                {
                    allReviews.length ? allReviews.map(e => (
                        <div className={s.reviewBox}>
                            <div className={s.review}>
                                {e.review}
                            </div>
                            <div className={s.picture}>
                                {
                                    e.userImage ?
                                        <img className={s.img} src={e.userImage} alt="profile" />
                                        :
                                        <img className={s.img} src={img} alt="img" />
                                }
                                <div className={s.rate}>{e.punctuation}⭐</div>
                            </div>
                        </div>
                    ))
                        : <div>No reviews yet</div>
                }
            </div>
        </div>
    )
}

export default Reviews