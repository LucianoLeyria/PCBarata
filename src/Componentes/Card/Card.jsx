import React from "react";
import logocompragamer from "../../assets/logocompragamer.png";
import logofullhard from "../../assets/logofullhard.png";
import logogezatek from "../../assets/logogezatek.png";

export const Card = ({ id, nombre, precio, img, categoria, tienda }) => {
  const datamapTienda = {
    compragamer: logocompragamer,
    fullhard: logofullhard,
    gezatek: logogezatek,
  };

  return (
    <div>
      <div className="w-80 h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
        <a href="#">
          <img
            className="w-full h-[320px] object-cover p-4 rounded-t-lg"
            src={img}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {nombre}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <img class="w-15 h-8 mt-3" src={datamapTienda[tienda]} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {precio}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ir a la web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
