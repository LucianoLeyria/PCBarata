import { React, useState, useEffect } from "react";
import s from "./Landing.module.css";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Card } from "../../Componentes/Card/Card";
import Footer from "../../Componentes/Footer/Footer";
import { Navbar } from "../../Componentes/Navbar/Navbar";
import { Loader } from "../../Componentes/Loader/Loader";
import { getProductosDestacados } from "../../Servicios/API/FetchProductos.js";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [loading, setLoader] = useState(false);
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Cambia 640 según tu breakpoint
  const navigate = useNavigate();

  const navegarHaciaCategorias = (nombre) => {
    navigate(`/productos/Todos?nombre=${nombre}`);
  };

  useEffect(() => {
    getProductosDestacados().then((arrayProductos) => {
      setProductosDestacados(arrayProductos);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar busquedaPorNombre={navegarHaciaCategorias} />
      <div className={s.rgbtop}></div>
      <div className={s.banner}>
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Contenido del carrusel aquí... */}
        </div>
      </div>

      <div className="flex justify-center p-8 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          🔥{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            PRODUCTOS DESTACADOS
          </span>{" "}
          🔥
        </h1>
      </div>
      <div className={s.rgbbot}></div>
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} h-auto`}>
        <div
          className={`${
            isMobile ? "w-100% h-auto" : "sticky top-0 left-0 h-full"
          }`}
        >
          <NavbarCat />
        </div>
        <div className="h-auto w-[1px] bg-[var(--colorLineaSeparadora)]"></div>
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 md:gap-20 p-6">
          {productosDestacados.map((p) => (
            <Card
              key={p.id} // Agregar key para cada Card
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              img={p.img}
              categoria={p.categoria}
              tienda={p.tienda}
            />
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <Footer />
      </div>
      {loading === true ? <Loader /> : null}
    </div>
  );
};
