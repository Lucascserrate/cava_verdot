import React from 'react';
import NavBar from '../../Navbar/Navbar';
import s from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={s.container}>
            <NavBar className={s.nav} />

        </div>
    )
}

export default Dashboard