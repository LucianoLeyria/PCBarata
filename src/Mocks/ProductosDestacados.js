import placa from "../assets/placa.jpg";
import notebook from "../assets/notebook.jpg";
import procesador from "../assets/micro.jpeg";
import mother from "../assets/mother.jpeg";
import ram from "../assets/ram.png";
import almacenamiento from "../assets/almacenamiento.jpeg";
import refrigeracion from "../assets/refrigeracion.jpg";
import gabinete from "../assets/gabinete.jpg";
import fuente from "../assets/fuente.jpeg";
import monitor from "../assets/monitor.jpg";
import teclado from "../assets/teclado.png";
import silla from "../assets/silla.jpeg";
import conectividad from "../assets/conectividad.jpg";

let id = 1;

export const productosDestacados = [
  {
    id: id++,
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: placa,
    categoria: "placas",
  },
  {
    id: id++,
    nombre: "Asus ROG Zephyrus G14",
    precio: "$800.000",
    img: notebook,
    categoria: "notebooks",
  },
  {
    id: id++,
    nombre: "Gigabyte AORUS B450 Elite",
    precio: "$105.000",
    img: mother,
    categoria: "mother",
  },
  {
    id: id++,
    nombre: "Intel Core i7-11700F",
    precio: "$180.000",
    img: procesador,
    categoria: "procesadores",
  },
  {
    id: id++,
    nombre: "Kingston HyperX Fury 16GB DDR4",
    precio: "$40.000",
    img: ram,
    categoria: "ram",
  },
  {
    id: id++,
    nombre: "Crucial P2 500GB NVMe",
    precio: "$48.000",
    img: almacenamiento,
    categoria: "almacenamiento",
  },
  {
    id: id++,
    nombre: "Cooler Master Hyper 212",
    precio: "$35.000",
    img: refrigeracion,
    categoria: "refrigeracion",
  },
  {
    id: id++,
    nombre: "Cooler Master MasterBox Q300L",
    precio: "$30.000",
    img: gabinete,
    categoria: "gabinetes",
  },
  {
    id: id++,
    nombre: "Thermaltake Smart RGB 700W",
    precio: "$40.000",
    img: fuente,
    categoria: "fuentes",
  },
  {
    id: id++,
    nombre: "Samsung Odyssey G7 32''",
    precio: "$250.000",
    img: monitor,
    categoria: "monitores",
  },
  {
    id: id++,
    nombre: "SteelSeries Arctis 7",
    precio: "$30.000",
    img: teclado,
    categoria: "perifericos",
  },
  {
    id: id++,
    nombre: "Secretlab Omega 2020",
    precio: "$150.000",
    img: silla,
    categoria: "sillas",
  },
  {
    id: id++,
    nombre: "Netgear Nighthawk AX8",
    precio: "$70.000",
    img: conectividad,
    categoria: "conectividad",
  },
];
