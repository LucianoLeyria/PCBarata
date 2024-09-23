import React from "react";
import s from "./NavbarCat.module.css";

export const NavbarCat = () => {
  return (
    <div className={s.navbarcat}>
      <a href="/productos/Notebooks">Notebooks</a>
      <a href="/productos/Procesadores">Procesadores</a>
      <a href="/productos/Mothers">Mothers</a>
      <a href="/productos/Placas de Video">Placas de Video</a>
      <a href="/productos/Memorias RAM">Memorias RAM</a>
      <a href="/productos/Almacenamiento">Almacenamiento</a>
      <a href="/productos/Refrigeracion">Refrigeración</a>
      <a href="/productos/Gabinetes">Gabinetes</a>
      <a href="/productos/Fuentes">Fuentes</a>
      <a href="/productos/Monitores">Monitores</a>
      <a href="/productos/Perifericos">Periféricos</a>
      <a href="/productos/Sillas Gamers">Sillas Gamers</a>
      <a href="/productos/Conectividad">Conectividad</a>
    </div>
  );
};
