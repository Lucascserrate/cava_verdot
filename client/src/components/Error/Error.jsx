import React from "react";
import s from './Error.module.css';

const Error = () => {
    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.title} >
                    <h1 className={s.h1} >Not Found</h1>
                </div>
                <div className={s.status}>
                    <h2 className={s.h2}>404</h2>
                </div>
            </div>
        </div>
    )
}

export default Error;