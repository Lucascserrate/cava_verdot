import React from 'react';
import { useState } from 'react';
import PostProductForm from '../../FormularioPostProduct/PostProductForm';
import Aside from '../Aside/Aside';
import NavBar from '../Navbar/Navbar';
// import Prueba from '../Prueba/Prueba';
import Stock from '../Stock/Stock';
import s from './Dashboard.module.css'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [display, setDisplay] = useState(false)

    const data = {
        labels: [
            'Ron',
            'Wine',
            'Tequila',
            'Mezcal',
            'Gin',
            'Whisky',
            'Beer',
            'Bourbon',
            'Brandy'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [30, 50, 60, 10, 20, 40, 70, 15, 25],
            backgroundColor: [
                '#212934',
                '#263238',
                '#37474f',
                '#455a64',
                '#546e7a',
                '#607d8b',
                '#78909c',
                '#90a4ae',
                '#b0bec5',
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
    };


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
                </div>
                <div className={s.card}>

                </div>
                <div className={s.card}>

                </div>
                <div className={s.card}>

                </div>
            </div>
            <div className={s.dona}>
                <Doughnut data={data} config={config} />
            </div>
            {display && <PostProductForm setDisplay={setDisplay} />}
        </div>
    )
}

export default Dashboard