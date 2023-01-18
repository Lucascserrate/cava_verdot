import React from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../Navbar/Navbar';
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
                <h2>Dashboard</h2>
                <Stock />
            </div>

        </div>
    )
}

export default Dashboard