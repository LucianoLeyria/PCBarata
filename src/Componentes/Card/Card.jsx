import React from "react";
import s from "./Card.module.css";
import placa from "../../assets/placa.jpg";
import { FaLocationArrow } from "react-icons/fa6";

export const Card = () => {
  return (
    <div className={s.divCard}>
      <img className={s.imgcard} src={placa} alt="" />
      <h3 className={s.namecard}>GeForce RTX 3070 GIGABYTE</h3>
      <p className={s.pricecard}>$428.235</p>
      <button className={s.buttoncard}>
        Adquirir
        <FaLocationArrow />
      </button>
    </div>
  );
};
