export const getProductosDestacados = async () => {
  const response = await fetch("http://localhost:8000/productos/destacados");
  console.log("Response=", response);
  const productosDestacados = await response.json();
  return productosDestacados;
};

export const getProductos = async ({ categoria, orden, nombre }) => {
  const response = await fetch(
    `http://localhost:8000/productos/generales?categoria=${categoria}&orden=${orden}&nombre=${nombre}`
  );
  console.log("Response=", response);
  const productosGeneral = await response.json();
  return productosGeneral;
};
