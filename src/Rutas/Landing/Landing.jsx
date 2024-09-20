import React from "react";
import icon from "../../assets/icon.png";
import s from "./Landing.module.css";
import banner from "../../assets/banner.png";
import { Searchbar } from "../../Componentes/Searchbar/Searchbar";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Card } from "../../Componentes/Card/Card";
import Footer from "../../Componentes/Footer/Footer";

export const Landing = () => {
  return (
    <div>
      <nav className={s.navbar}>
        <img className={s.icon} src={icon} alt="icon" />
        <Searchbar />
        <a href="">
          <p className={s.titleproductos}>PRODUCTOS</p>
        </a>
      </nav>
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
};
