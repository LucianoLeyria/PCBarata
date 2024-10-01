import React from "react";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.containerloader}>
      <div className={s.loader}></div>
    </div>
  );
};
