import { React, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Importar useLocation
import s from "./Productos.module.css";
import { Card } from "../../Componentes/Card/Card";
import { NavbarCat } from "../../Componentes/NavbarCat/NavbarCat";
import { Navbar } from "../../Componentes/Navbar/Navbar";
import Footer from "../../Componentes/Footer/Footer";
import ReactPaginate from "react-paginate";
import { FaSortAlphaDown, FaSortAlphaUp, FaDollarSign } from "react-icons/fa";
import { getProductos } from "../../Servicios/API/FetchProductos.js";
import { mapearCategorias } from "../../Servicios/API/Datamap.js";
import { Loader } from "../../Componentes/Loader/Loader";

export const Productos = () => {
  let { categoria } = useParams();
  const location = useLocation(); // Obtenemos la ubicación actual
  const [orden, setOrden] = useState("");
  const [productos, setProductos] = useState([]);
  const [loading, setLoader] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [nombre, setNombre] = useState("");
  const cantidadDeProdsPorPaginas = 20;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Cambia 640 según tu breakpoint

  // Obtener el valor del query param 'nombre'
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const nombreParam = queryParams.get("nombre");
    if (nombreParam) {
      setNombre(nombreParam); // Si el parámetro existe, lo guardamos en el estado
    }
  }, [location.search]);

  useEffect(() => {
    setLoader(true);
    getProductos({
      categoria: mapearCategorias[categoria],
      orden: orden,
      nombre: nombre,
      cantidadPorPag: cantidadDeProdsPorPaginas,
      paginaActual: paginaActual,
    }).then((data) => {
      console.log(data);
      setProductos(data.productos);
      setTotalPaginas(
        Math.ceil(data.totalProductos / cantidadDeProdsPorPaginas)
      );
      setLoader(false);
    });
  }, [orden, paginaActual, nombre]);

  const busquedaPorNombre = (nombre) => {
    setNombre(nombre);
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setPaginaActual(selectedPage);
    console.log("Selected page:", selectedPage);
  };

  return (
    <div class="flex flex-col">
      <Navbar busquedaPorNombre={busquedaPorNombre} />
      <div className={s.rgbtop}></div>

      <div className="flex justify-center p-8 text-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          🔥{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {categoria.toUpperCase()}
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
        <div class="h-auto w-[3px] bg-[var(--colorLineaSeparadora)]"></div>
        <div class="p-5 px-[20px] flex flex-wrap gap-5">
          {loading ? (
            <div className={s.loader}>
              <Loader />
            </div>
          ) : (
            <>
              <div class="flex justify-end items-center w-full mb-[20px] gap-[8px] flex-wrap">
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
              <div className="flex flex-wrap justify-center gap-10 lg:gap-20 md:gap-20 p-6">
                {productos.map((p) => (
                  <Card
                    key={p.id} // Agrega una clave única para cada Card
                    id={p.id}
                    nombre={p.nombre}
                    img={p.img}
                    categoria={p.categoria}
                    precio={p.precio}
                    tienda={p.tienda}
                  />
                ))}
              </div>
              <div class="flex justify-center my-5 gap-4 select-none w-full h-[45px]">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Siguiente"
                  nextClassName="text-lg flex items-center justify-center px-3 p-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onPageChange={handlePageClick}
                  pageCount={totalPaginas} // Asegúrate de que totalPaginas sea correcto
                  previousLabel="Anterior"
                  previousClassName=" p-5 text-lg flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  renderOnZeroPageCount={null}
                  containerClassName=" p-5 inline-flex -space-x-px text-sm"
                  breakClassName="text-lg flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  pageRangeDisplayed={5}
                  forcePage={paginaActual - 1} // Cambia a paginaActual - 1
                  activeClassName=" p-5 text-lg flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" // Añade esta propiedad para resaltar la página activa
                  pageClassName=" p-5 text-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                />
              </div>
            </>
          )}
        </div>
      </div>
      {loading === false && <Footer />}
    </div>
  );
};
