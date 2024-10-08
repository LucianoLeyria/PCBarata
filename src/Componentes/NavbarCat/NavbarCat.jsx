import { useState } from "react";

export const NavbarCat = () => {
  const [openSidebar, setOpenSidebar] = useState(false); // Estado para controlar el sidebar

  return (
    <div class={openSidebar ? "h-auto" : "h-[50px]"}>
      <button
        onClick={() => setOpenSidebar(!openSidebar)} // Cambiar el estado al hacer clic
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`top-0 left-0 lg:w-64 h-auto transition-transform transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 lg:sticky`} // Usar la lógica de openSidebar
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="font-medium">
            {/* Reducir el espacio entre items */}
            {[
              "Todos",
              "Notebooks",
              "Procesadores",
              "Mothers",
              "Placas de Video",
              "Memorias RAM",
              "Almacenamiento",
              "Refrigeración",
              "Gabinetes",
              "Fuentes",
              "Monitores",
              "Periféricos",
              "Sillas Gamers",
              "Conectividad",
            ].map((item) => (
              <li key={item} className="mb-1  lg:text-left text-center">
                {" "}
                {/* Ajustar el espacio entre items */}
                <a
                  href={`/productos/${item}`}
                  className={`flex items-center p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    openSidebar ? "text-xs" : "text-md" // Cambiar tamaño de fuente en mobile
                  }`}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
