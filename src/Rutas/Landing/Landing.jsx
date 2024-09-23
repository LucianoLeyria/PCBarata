import React from "react";
import s from "./Landing.module.css";
import banner from "../../assets/banner.png";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Card } from "../../Componentes/Card/Card";
import Footer from "../../Componentes/Footer/Footer";
import { productosDestacados } from "../../Mocks/ProductosDestacados";
import { Navbar } from "../../Componentes/Navbar/Navbar";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className={s.rgbtop}></div>
      <div className={s.banner}>
        <a href="">
          <img className={s.imgbanner} src={banner} alt="banner" />
        </a>
      </div>
      <div className={s.rgbbot}></div>
      <div className={s.divtituloproductosdestacados}>
        <h1 className={s.productosdestacados}>🔥 PRODUCTOS DESTACADOS 🔥</h1>
      </div>
      <div className={s.navbarcatycards}>
        <div className={s.navbarcat}>
          <NavbarCat />
        </div>
        <div className={s.lineaseparadora}></div>

        <div className={s.cards}>
          {productosDestacados.map((p) => (
            <Card
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              img={p.img}
              categoria={p.categoria}
            />
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
};
