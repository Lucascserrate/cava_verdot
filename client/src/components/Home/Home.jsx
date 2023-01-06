import React from 'react';
import s from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import CarouselSlide from '../Carousel/Carousel'
import BubbleWpp from '../BubbleWpp/BubbleWpp'


const Home = () => {
    return (
        <div className={s.container}>
            <Navbar />
            <CarouselSlide />
            <BubbleWpp />
        </div>
    )
}

export default Home;