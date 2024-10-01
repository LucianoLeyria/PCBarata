const urlBack = import.meta.env.VITE_BACKURL;

export const getProductosDestacados = async () => {
  const response = await fetch(urlBack + "/productos/destacados");
  console.log("Response=", response);
  const productosDestacados = await response.json();
  return productosDestacados;
};

export const getProductos = async ({ categoria, orden, nombre }) => {
  const response = await fetch(
    `${urlBack}/productos/generales?categoria=${categoria}&orden=${orden}&nombre=${nombre}`
  );
  console.log("Response=", response);
  const productosGeneral = await response.json();
  return productosGeneral;
};
