import React from 'react';
import s from './Home.module.css'
import CarouselSlide from '../Carousel/Carousel'
import BubbleWpp from '../BubbleWpp/BubbleWpp'
import ShoppingCart from '../ShoppingCart/ShoppingCart'



const Home = () => {
    return (
        <div className={s.container}>
            <CarouselSlide />
            <ShoppingCart />
            <BubbleWpp />
        </div>
    )
}

export default Home;