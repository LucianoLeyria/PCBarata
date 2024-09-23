import { React, useState } from "react";
import s from "./Productos.module.css";
import { productos } from "../../Mocks/Productos";
import { Card } from "../../Componentes/Card/Card";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Navbar } from "../../Componentes/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../Componentes/Footer/Footer";
import ReactPaginate from "react-paginate";
import { FaSortAlphaDown, FaSortAlphaUp, FaDollarSign } from "react-icons/fa"; // Importa los íconos que necesitas

export const Productos = () => {
  const [ordenAlfabetico, setOrdenAlfabetico] = useState("");
  const [ordenporPrecio, setOrdenPorPrecio] = useState("");

  const handlePageClick = (event) => {
    console.log(event);
  };
  const itemsPerPage = 1;
  const pageCount = Math.ceil(productos.length / itemsPerPage);

  let { categoria } = useParams();
  return (
    <div className={s.productosgral}>
      <Navbar />
      <div className={s.rgbtop}></div>
      <div className={s.divtitulocategorias}>
        <h1 className={s.titulocategorias}>🔥 {categoria.toUpperCase()} 🔥</h1>
      </div>
      <div className={s.rgbbot}></div>
      <div className={s.navbarCatyProductos}>
        <div className={s.navbarCat}>
          <NavbarCat />
        </div>
        <div className={s.lineaseparadora}></div>
        <div className={s.productos}>
          <div className={s.buttonsfiltros}>
            <button
              onClick={() =>
                setOrdenAlfabetico(ordenAlfabetico === "Z-A" ? "" : "Z-A")
              }
              className={`${s.buttonfiltro} ${
                ordenAlfabetico === "Z-A" ? s.buttonfiltropresionado : ""
              }`}
            >
              <FaSortAlphaDown className={s.icon} /> Z-A
            </button>
            <button
              onClick={() =>
                setOrdenAlfabetico(ordenAlfabetico === "A-Z" ? "" : "A-Z")
              }
              className={`${s.buttonfiltro} ${
                ordenAlfabetico === "A-Z" ? s.buttonfiltropresionado : ""
              }`}
            >
              <FaSortAlphaUp className={s.icon} /> A-Z
            </button>
            <button
              onClick={() =>
                setOrdenPorPrecio(
                  ordenporPrecio === "Menor Precio" ? "" : "Menor Precio"
                )
              }
              className={`${s.buttonfiltro} ${
                ordenporPrecio === "Menor Precio"
                  ? s.buttonfiltropresionado
                  : ""
              }`}
            >
              <FaDollarSign className={s.icon} /> Menor Precio
            </button>
            <button
              onClick={() =>
                setOrdenPorPrecio(
                  ordenporPrecio === "Mayor Precio" ? "" : "Mayor Precio"
                )
              }
              className={`${s.buttonfiltro} ${
                ordenporPrecio === "Mayor Precio"
                  ? s.buttonfiltropresionado
                  : ""
              }`}
            >
              <FaDollarSign className={s.icon} /> Mayor Precio
            </button>
          </div>
          {productos.map((p) => (
            <Card
              id={p.id}
              nombre={p.nombre}
              img={p.img}
              categoria={p.categoria}
              precio={p.precio}
            />
          ))}
          <div className={s.paginado}>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Siguiente"
              nextClassName={s.nextClassName}
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="Anterior"
              previousClassName={s.previousClassName}
              renderOnZeroPageCount={null}
              pageClassName={s.pageClassName}
              containerClassName={s.containerClassName}
              breakClassName={s.breakClassName}
              pageRangeDisplayed={5}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
