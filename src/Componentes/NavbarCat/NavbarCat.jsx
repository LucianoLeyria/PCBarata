import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import s from "./NavbarCat.module.css";

export const NavbarCat = () => {
  const [isOpen, setIsOpen] = useState(true); // Estado inicial abierto en versión PC

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Visible solo en responsive */}
      <h1 className={s.toggleTitle} onClick={toggleCategories}>
        Categorías {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </h1>

      {/* En la versión de escritorio el sidebar siempre es visible */}
      <div className={`${s.navbarcat} ${!isOpen ? s.closed : ""}`}>
        <a href="/productos/Notebooks">Notebooks</a>
        <a href="/productos/Procesadores">Procesadores</a>
        <a href="/productos/Mothers">Mothers</a>
        <a href="/productos/Placas de Video">Placas de Video</a>
        <a href="/productos/Memorias RAM">Memorias RAM</a>
        <a href="/productos/Almacenamiento">Almacenamiento</a>
        <a href="/productos/Refrigeración">Refrigeración</a>
        <a href="/productos/Gabinetes">Gabinetes</a>
        <a href="/productos/Fuentes">Fuentes</a>
        <a href="/productos/Monitores">Monitores</a>
        <a href="/productos/Periféricos">Periféricos</a>
        <a href="/productos/Sillas Gamers">Sillas Gamers</a>
        <a href="/productos/Conectividad">Conectividad</a>
      </div>
    </div>
  );
};
