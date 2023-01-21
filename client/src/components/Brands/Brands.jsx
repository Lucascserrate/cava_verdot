import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s from "./Brands.module.css";
import img1 from '../../assets/marcas/Absolut_Vodka.png'
import img2 from '../../assets/marcas/douro.png'
import img3 from '../../assets/marcas/havana.png'
import img4 from '../../assets/marcas/Jack-Daniels.png'
import img5 from '../../assets/marcas/smirnoff.png'
import img6 from '../../assets/marcas/johnnie_walker.png'
import img7 from '../../assets/marcas/anselmo.png'
import img8 from '../../assets/marcas/logo-negro.png'
import img9 from '../../assets/marcas/EM.png'
import img10 from '../../assets/marcas/logo-brugal-20.png'

const Brands = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };



  return (
    <div className={s.container}>
      <div className={s.center}>
        <Carousel
          responsive={responsive}
          className={s.carousel__cards}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          infinite={true}
        >
          <img className={s.img} src={img9} alt="img" />
          <img className={s.img} src={img8} alt="img" />
          <img className={s.img} src={img7} alt="img" />
          <img className={s.img} src={img2} alt="img" />
          <img className={s.img} src={img1} alt="img" />
          <img className={s.img} src={img3} alt="img" />
          <img className={s.img} src={img4} alt="img" />
          <img className={s.img} src={img5} alt="img" />
          <img className={s.img} src={img6} alt="img" />
          <img className={s.img} src={img10} alt="img" />
        </Carousel>
      </div>
    </div>
  );
}

export default Brands