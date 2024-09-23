import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import icon from "../../assets/icon.png";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <a href="/">
        <img className={s.icon} src={icon} alt="icon" />
      </a>
      <Searchbar />
      <a href="/">
        <p className={s.titleproductos}>PRODUCTOS</p>
      </a>
    </nav>
  );
};
