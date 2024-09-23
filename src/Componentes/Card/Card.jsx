import React from "react";
import s from "./Card.module.css";
import { FaLocationArrow } from "react-icons/fa6";

export const Card = ({ id, nombre, precio, img, categoria }) => {
  return (
    <div className={s.divCard}>
      <img className={s.imgcard} src={img} alt="" />
      <h3 className={s.namecard}>{nombre}</h3>
      <p className={s.pricecard}>{precio}</p>
      <button className={s.buttoncard}>
        Adquirir
        <FaLocationArrow />
      </button>
    </div>
  );
};
