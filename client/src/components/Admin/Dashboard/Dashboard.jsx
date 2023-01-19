import React from 'react';
import { useState } from 'react';
import PostProductForm from '../../FormularioPostProduct/PostProductForm';
import Aside from '../Aside/Aside';
import NavBar from '../Navbar/Navbar';
import Prueba from '../Prueba/Prueba';
import Stock from '../Stock/Stock';
import s from './Dashboard.module.css'

const Dashboard = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div className={s.container}>
            <NavBar />
            <div className={s.aside}>
                <Aside />
            </div>
            <div className={s.title}>
                <h2 className={s.h2}>Dashboard</h2>
                <h3 className={s.h3}>An admin table</h3>
                <Stock setDisplay={setDisplay} />
            </div>
            <div className={s.card}>

            </div>
            {display && <PostProductForm setDisplay={setDisplay} />}
        </div>
    )
}

export default Dashboard