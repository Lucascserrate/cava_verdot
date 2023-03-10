import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDrinksByRating } from "../../redux/actions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s from "./Carousel.module.css";
import { Link } from "react-router-dom";

export default function CarouselSlide(props) {
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
      items: 5,
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
    <div key={e.id} className={`card ${s.cards}`}>
      <Link to={`/store/${e.id}`} className={s.card__content}>
        <img
          src={e.image}
          alt="product_image"
          className={`${s.card__img} product--img`}
        />
        <div className={s.card__items}>
          <h2 className={s.name}>{e.name}</h2>
          <p className={s.price}>$ {e.price}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className={`${s.carousel} Slide`}>
      <div className={s.center}>
        <Carousel
          showDots={false}
          responsive={responsive}
          className={s.carousel__cards}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {product}
        </Carousel>
      </div>
    </div>
  );
}
