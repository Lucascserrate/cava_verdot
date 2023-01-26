import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import s from "./About.module.css";

function About() {
  return (
    <div className={s.about}>
      <NavBar />
      <div className={`${s.about__content} ${s.container}`}>
        <div className={s.about__element}>
          <figure className={s.about__picture}></figure>
          <div className={s.about__texts}>
            <h1 className={s.about__subtitle}>¿Quienes Somos?</h1>
            <p className={s.about__paragraph}>
              Cava-Verdot, es el resultado de una iniciativa creada en grupo por
              los integrantes de este equipo en diciembre de 2022.
              <br />
              <br />
              <p>
                Cava-Verdot fue creada para ser un catálogo en la que cualquier
                persona -mayor de edad por supuesto-, pueda ver de nuestra
                extensa variedad de productos, la descripcion y popularidad de
                la bebida más acorde a su paladar.
              </p>
              <br />
              <p>
                El éxito de esta "Cava Online" y su exclusiva variedad, generó
                una sacudida en la web y debido a ello, agregamos nuevos
                productos a nuestro catálogo a medida que nuestra cantidad de
                seguidores en redes sociales creció.
              </p>
            </p>
          </div>
        </div>
        <div className={s.about__element}>
          <figure
            className={`${s.about__picture} ${s.about__picture__medio}`}
          ></figure>
          <div className={`${s.about__texts} ${s.about__texts__medio}`}>
            <h1 className={s.about__subtitle}>El Proceso</h1>
            <p className={s.about__paragraph}>
              Primero, creamos nuestro catálogo online, donde cualquier usuario
              es capas de recorrer por nuestra extensa variedad de bebidas,
              haciendo preferencia por lo que más le guste y pudiendo acceder a
              una seccion más detallada del producto.
              <br />
              <br />
              <p>
                {" "}
                Y luego, desarrollamos nuestra seccion de compra, en la cual
                vendemos nuestros productos y manejamos todo el proceso desde la
                seleccion hasta la preparación de la orden.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
