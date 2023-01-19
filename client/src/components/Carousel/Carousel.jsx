import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDrinksByRating } from "../../redux/actions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s from "./Carousel.module.css";
import { Link } from "react-router-dom";

export default function CarouselSlide() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.drinksRating);

  useEffect(() => {
    dispatch(getDrinksByRating());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const product = state.map((e) => (
    <Link key={e.id} to={`/store/${e.id}`}>
      <div className={`${s.card__content} card`}>
        <img
          src={e.image}
          alt="product_image"
          className={`${s.card__img} product--img`}
        />
        <div className={s.card__items}>
          <h2 className={s.name}>{e.name}</h2>
          <p className={s.price}>$ {e.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className={`${s.carousel} Slide`}>
      <h1 className={s.carousel__title}>Nuestros productos detacados</h1>
      <div className={s.center}>
        <Carousel
          showDots={true}
          responsive={responsive}
          className={s.carousel__cards}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {product}
        </Carousel>
      </div>
    </div>
  );
}
