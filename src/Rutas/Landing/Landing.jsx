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
  const navigate = useNavigate();

  const navegarHaciaCategorias = (nombre) => {
    navigate(`/productos/Todos?nombre=${nombre}`);
  };

  useEffect(() => {
    getProductosDestacados().then((arrayProductos) => {
      setProductosDestacados(arrayProductos);
    });
  }, []);

  return (
    <div>
      <Navbar busquedaPorNombre={navegarHaciaCategorias} />
      <div className={s.rgbtop}></div>
      <div className={s.banner}>
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://www.gezatek.com.ar/uploads/27-08-2024-10-08-46-20-05-2024-01-05-58-11-01-2024-12-01-35-banner.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://www.gezatek.com.ar/uploads/27-08-2024-10-08-46-20-05-2024-01-05-58-11-01-2024-12-01-35-banner.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://www.gezatek.com.ar/uploads/27-08-2024-10-08-46-20-05-2024-01-05-58-11-01-2024-12-01-35-banner.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className={s.rgbbot}></div>
      <div class="flex justify-center p-8">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          🔥{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            PRODUCTOS DESTACADOS
          </span>{" "}
          🔥
        </h1>
      </div>
      <div className={s.rgbbot}></div>
      <div class="flex h-auto">
        <div class="sticky top-0 left-0 h-full">
          <NavbarCat />
        </div>
        <div class="h-auto w-[1px] bg-[var(--colorLineaSeparadora)]"></div>
        <div class="flex flex-wrap gap-20 p-6">
          {productosDestacados.map((p) => (
            <Card
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
