import React from 'react';
import s from './Ratings.module.css'
import { Rating } from '@mui/material'
import { useState } from 'react';

const Ratings = () => {
    const [value, setValue] = useState(0)
    console.log(value);
    return (
        <div className={s.container}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            {
                value
                    ? <textarea className={s.textarea} name="" id="" cols="30" rows="10" ></textarea>
                    : undefined
            }

        </div>
    )
}

export default Ratings