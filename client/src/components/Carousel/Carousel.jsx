import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDrinks } from "../../redux/actions";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselSlide() {

  const [carousel, setCarousel] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.drinks);

  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);


useEffect(() => {
    if (state) {
      setCarousel([...state].splice(0, 15));
    }
  }, [state]);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const product = carousel.map((e) => (
 
    <div key={e.id} className="card">
      <img src={e.image} alt='product_image' className="product--img"/>
      <h2 className="name">{e.name}</h2>
      <p className="price">{e.price}</p>
      
    </div>
  
))

  return (
    <div className="Slide">
      <h1>Algunos de nuestros productos</h1>
      <Carousel showDots={true} responsive={responsive}>
        
        {product}
        
        
      </Carousel>
    </div>
  )
}

