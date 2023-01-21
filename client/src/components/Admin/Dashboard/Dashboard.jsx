import React from 'react';
import { useState } from 'react';
import PostProductForm from '../../FormularioPostProduct/PostProductForm';
import Aside from '../Aside/Aside';
import NavBar from '../Navbar/Navbar';
// import Prueba from '../Prueba/Prueba';
import Stock from '../Stock/Stock';
import s from './Dashboard.module.css'
import { BarController } from 'chart.js'
import 'chart.js/auto';

const Dashboard = () => {
    const [display, setDisplay] = useState(false)
    /* 
        const labels = ['July', 'August', 'September', 'October', 'November', 'December', 'January'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        }; */

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
            <div className={s.cards}>
                <div className={s.card}>
                    {/* <BarController data={data} /> */}
                </div>
                <div className={s.card}>

                </div>
                <div className={s.card}>

                </div>
            </div>
            {display && <PostProductForm setDisplay={setDisplay} />}
        </div>
    )
}

export default Dashboard