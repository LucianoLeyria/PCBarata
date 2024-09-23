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

export const productos = [
  {
    id: id++,
    nombre: "Radeon RX 6700 XT ASUS",
    precio: "$315.000",
    img: placa, // Imagen de placa de video
    categoria: "placas",
  },
  {
    id: id++,
    nombre: "GeForce GTX 1660 MSI",
    precio: "$250.500",
    img: placa,
    categoria: "placas",
  },
  {
    id: id++,
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: placa,
    categoria: "placas",
  },
  {
    id: id++,
    nombre: "Dell XPS 13 9300",
    precio: "$720.000",
    img: notebook, // Imagen de notebook
    categoria: "notebooks",
  },
  {
    id: id++,
    nombre: "Lenovo Legion 5i",
    precio: "$680.000",
    img: notebook,
    categoria: "notebooks",
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
    nombre: "ASRock B550 Phantom Gaming",
    precio: "$120.000",
    img: mother, // Imagen de mother
    categoria: "mother",
  },
  {
    id: id++,
    nombre: "MSI MPG B550 Gaming Edge",
    precio: "$135.000",
    img: mother,
    categoria: "mother",
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
    nombre: "Intel Core i9-11900K",
    precio: "$290.000",
    img: procesador, // Imagen de procesador
    categoria: "procesadores",
  },
  {
    id: id++,
    nombre: "AMD Ryzen 7 5800X",
    precio: "$215.000",
    img: procesador,
    categoria: "procesadores",
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
    nombre: "Corsair Vengeance LPX 16GB DDR4",
    precio: "$38.000",
    img: ram, // Imagen de RAM
    categoria: "ram",
  },
  {
    id: id++,
    nombre: "G.SKILL Ripjaws V 32GB DDR4",
    precio: "$60.000",
    img: ram,
    categoria: "ram",
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
    nombre: "Samsung 970 EVO Plus 1TB NVMe",
    precio: "$85.000",
    img: almacenamiento, // Imagen de almacenamiento
    categoria: "almacenamiento",
  },
  {
    id: id++,
    nombre: "WD Black SN750 1TB NVMe",
    precio: "$90.000",
    img: almacenamiento,
    categoria: "almacenamiento",
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
    nombre: "Corsair H100i RGB Pro XT",
    precio: "$55.000",
    img: refrigeracion, // Imagen de refrigeración
    categoria: "refrigeracion",
  },
  {
    id: id++,
    nombre: "NZXT Kraken Z63",
    precio: "$120.000",
    img: refrigeracion,
    categoria: "refrigeracion",
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
    nombre: "NZXT H510 Elite",
    precio: "$45.000",
    img: gabinete, // Imagen de gabinete
    categoria: "gabinetes",
  },
  {
    id: id++,
    nombre: "Corsair iCUE 4000X RGB",
    precio: "$60.000",
    img: gabinete,
    categoria: "gabinetes",
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
    nombre: "Corsair RM750x 750W 80+ Gold",
    precio: "$52.000",
    img: fuente, // Imagen de fuente de alimentación
    categoria: "fuentes",
  },
  {
    id: id++,
    nombre: "EVGA SuperNOVA 850 G5",
    precio: "$75.000",
    img: fuente,
    categoria: "fuentes",
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
    nombre: "LG 27GN950 27'' 4K",
    precio: "$185.000",
    img: monitor, // Imagen de monitor
    categoria: "monitores",
  },
  {
    id: id++,
    nombre: "Acer Predator XB273K 27''",
    precio: "$210.000",
    img: monitor,
    categoria: "monitores",
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
    nombre: "Logitech G502 HERO",
    precio: "$25.000",
    img: teclado, // Imagen de periférico
    categoria: "perifericos",
  },
  {
    id: id++,
    nombre: "Razer BlackWidow Elite",
    precio: "$45.000",
    img: teclado,
    categoria: "perifericos",
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
    nombre: "Corsair T3 Rush",
    precio: "$65.000",
    img: silla, // Imagen de silla gamer
    categoria: "sillas",
  },
  {
    id: id++,
    nombre: "DXRacer Formula Series",
    precio: "$110.000",
    img: silla,
    categoria: "sillas",
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
    nombre: "TP-Link Archer AX6000",
    precio: "$30.000",
    img: conectividad, // Imagen de conectividad
    categoria: "conectividad",
  },
  {
    id: id++,
    nombre: "ASUS ROG Rapture GT-AX11000",
    precio: "$85.000",
    img: conectividad,
    categoria: "conectividad",
  },
  {
    id: id++,
    nombre: "Netgear Nighthawk AX8",
    precio: "$70.000",
    img: conectividad,
    categoria: "conectividad",
  },
];
