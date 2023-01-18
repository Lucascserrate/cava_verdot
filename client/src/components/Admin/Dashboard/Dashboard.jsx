import React from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../Navbar/Navbar';
import Prueba from '../Prueba/Prueba';
import Stock from '../Stock/Stock';
import s from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={s.container}>
            <NavBar />
            <div className={s.aside}>
                <Aside />
            </div>
            <div className={s.title}>
                <h2 className={s.h2}>Dashboard</h2>
                <h3 className={s.h3}>A admin table</h3>
                <Stock />
                <Prueba />
            </div>

        </div>
    )
}

export default Dashboard