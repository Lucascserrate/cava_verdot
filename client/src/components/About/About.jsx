import React from "react";
import image from "../../assets/PAGINA.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import s from "./About.module.css";
import aboutImg from '../../assets/about_provisional.svg'

function About() {
  return (
    <div className={s.about}>
      <NavBar/>
      <div className={`${s.about__content} ${s.container}`}>
        <div className={s.about__element}>
          <figure className={s.about__picture}>
            <img src={aboutImg} alt="img about" className={s.about__img} />
          </figure>
          <div className={s.about__texts}>
            <h1 className={s.about__subtitle}>¿About Us?</h1>
            <p className={s.about__paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              semper nisi ante, vitae efficitur lorem egestas in. Vestibulum
              eget orci id sapien viverra volutpat. Cras euismod, massa gravida
              commodo commodo, dui erat commodo orci, quis ultrices ipsum purus
              et mi. Duis dapibus tristique massa, hendrerit tristique orci
              tincidunt vitae. Praesent rhoncus mauris eros, non lacinia sapien
              convallis venenatis. Vestibulum pulvinar id est eu tempus. In
              suscipit vitae ex accumsan viverra. Integer semper turpis nec
              lacus vehicula lobortis. Vivamus non hendrerit lorem, a cursus
              ipsum. Ut quis dignissim nibh, eget porttitor lectus. Ut cursus
              placerat convallis.
            </p>
          </div>
        </div>
        <div className={s.about__element}>
          <figure className={`${s.about__picture} ${s.about__picture__medio}`}>
            <img src={aboutImg} alt="img about" className={s.about__img} />
          </figure>
          <div className={`${s.about__texts} ${s.about__texts__medio}`}>
            <h1 className={s.about__subtitle}>¿About Us?</h1>
            <p className={s.about__paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              semper nisi ante, vitae efficitur lorem egestas in. Vestibulum
              eget orci id sapien viverra volutpat. Cras euismod, massa gravida
              commodo commodo, dui erat commodo orci, quis ultrices ipsum purus
              et mi. Duis dapibus tristique massa, hendrerit tristique orci
              tincidunt vitae. Praesent rhoncus mauris eros, non lacinia sapien
              convallis venenatis. Vestibulum pulvinar id est eu tempus. In
              suscipit vitae ex accumsan viverra. Integer semper turpis nec
              lacus vehicula lobortis. Vivamus non hendrerit lorem, a cursus
              ipsum. Ut quis dignissim nibh, eget porttitor lectus. Ut cursus
              placerat convallis.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
