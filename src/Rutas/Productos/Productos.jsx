import { React, useState, useEffect } from "react";
import s from "./Productos.module.css";
import { Card } from "../../Componentes/Card/Card";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Navbar } from "../../Componentes/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../Componentes/Footer/Footer";
import ReactPaginate from "react-paginate";
import { FaSortAlphaDown, FaSortAlphaUp, FaDollarSign } from "react-icons/fa";
import { getProductos } from "../../Servicios/API/FetchProductos.js";
import { mapearCategorias } from "../../Servicios/API/Datamap.js";
import { Loader } from "../../Componentes/Loader/Loader";

export const Productos = () => {
  let { categoria } = useParams();
  const [orden, setOrden] = useState("");
  const [productos, setProductos] = useState([]);
  const [loading, setLoader] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  useEffect(() => {
    setLoader(true);
    getProductos({
      categoria: mapearCategorias[categoria],
      orden: orden,
      nombre: "",
      cantidadPorPag: 10,
      paginaActual: paginaActual,
    }).then((data) => {
      console.log(data);
      setProductos(data.productos);
      setTotalPaginas(Math.ceil(data.totalProductos / 10));
      setLoader(false);
    });
  }, [orden, paginaActual]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1; // ReactPaginate usa índice base 0
    setPaginaActual(selectedPage);
    console.log("Selected page:", selectedPage);
  };

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
          {loading ? (
            <div className={s.loader}>
              <Loader />
            </div>
          ) : (
            <>
              <div className={s.buttonsfiltros}>
                <button
                  onClick={() =>
                    setOrden(orden === "nombre_DESC" ? "" : "nombre_DESC")
                  }
                  className={`${s.buttonfiltro} ${
                    orden === "nombre_DESC" ? s.buttonfiltropresionado : ""
                  }`}
                >
                  <FaSortAlphaDown className={s.icon} /> Z-A
                </button>
                <button
                  onClick={() =>
                    setOrden(orden === "nombre_ASC" ? "" : "nombre_ASC")
                  }
                  className={`${s.buttonfiltro} ${
                    orden === "nombre_ASC" ? s.buttonfiltropresionado : ""
                  }`}
                >
                  <FaSortAlphaUp className={s.icon} /> A-Z
                </button>
                <button
                  onClick={() =>
                    setOrden(orden === "precio_ASC" ? "" : "precio_ASC")
                  }
                  className={`${s.buttonfiltro} ${
                    orden === "precio_ASC" ? s.buttonfiltropresionado : ""
                  }`}
                >
                  <FaDollarSign className={s.icon} /> Menor Precio
                </button>
                <button
                  onClick={() =>
                    setOrden(orden === "precio_DESC" ? "" : "precio_DESC")
                  }
                  className={`${s.buttonfiltro} ${
                    orden === "precio_DESC" ? s.buttonfiltropresionado : ""
                  }`}
                >
                  <FaDollarSign className={s.icon} /> Mayor Precio
                </button>
              </div>
              <div className={s.productoscards}>
                {productos.map((p) => (
                  <Card
                    key={p.id} // Agrega una clave única para cada Card
                    id={p.id}
                    nombre={p.nombre}
                    img={p.img}
                    categoria={p.categoria}
                    precio={p.precio}
                  />
                ))}
              </div>
              <div className={s.paginado}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Siguiente"
                  nextClassName={s.nextClassName}
                  onPageChange={handlePageClick}
                  pageCount={totalPaginas} // Asegúrate de que totalPaginas sea correcto
                  previousLabel="Anterior"
                  previousClassName={s.previousClassName}
                  renderOnZeroPageCount={null}
                  pageClassName={s.pageClassName}
                  containerClassName={s.containerClassName}
                  breakClassName={s.breakClassName}
                  pageRangeDisplayed={5}
                  forcePage={paginaActual - 1} // Cambia a paginaActual - 1
                  activeClassName={s.activeClassName} // Añade esta propiedad para resaltar la página activa
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
