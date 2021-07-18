import img1 from "./../../assets/img/foto1.png";
import img2 from "./../../assets/img/foto2.png";
import logo1 from "./../../assets/img/logo1.png";
import logo2 from "./../../assets/img/logo2.png";
import logo3 from "./../../assets/img/logo3.png";
import logo4 from "./../../assets/img/logo4.png";
import logo5 from "./../../assets/img/logo5.png";
import logo6 from "./../../assets/img/logo6.png";
import product1 from "./../../assets/img/producto2.jpg";
import product2 from "./../../assets/img/producto3.jpg";
const preventDefault = (event) => event.preventDefault();

export const Etiqueta = [
  {
    nombre: "MANAGED SERVICES",
    funcion: preventDefault,
  },
  {
    nombre: "MODERN WORKPLACE",
    funcion: preventDefault,
  },
];
export const imagen = [
  {
    imagen: logo1,
    link: "#",
  },
  {
    imagen: logo4,
    link: "#",
  },
  {
    imagen: logo3,
    link: "#",
  },
  {
    imagen: logo2,
    link: "#",
  },
  {
    imagen: logo5,
    link: "#",
  },
  {
    imagen: logo6,
    link: "#",
  },
];
export const foto = [
  {
    img: img1,
    titulo: "Daniel Frick, CEO Witzenmann",
    descripcion:
      "Hafn-IT manages our services. Our telephony teams too. Since then, we have had less work and can quickly add or cancel services.",
  },
  {
    img: img2,
    titulo: "Daniel Frick, CEO Witzenmann",
    descripcion:
      "Hafn-IT manages our services. Our telephony teams too. Since then, we have had less work and can quickly add or cancel services.",
  },
];
export const pregunta = [
  {
    id: 1,
    pregunta: "Can the service be combined with other team services?",
    contenido:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    pregunta: "How do updates work?",
    contenido:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    pregunta: "Why do I have to have this if I still use Lync?",
    contenido:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];
export const items = [
  {
    img: product1,
    titulo: "Cloud transition",
    contenido:
      "The implementation of the project based on the concept from the Cloud Connect Assessment",
  },
  {
    img: product2,
    titulo: "HAFN-IT Microsoft 365 Landing Zone",
    contenido: "Landing zone for your managed services",
  },
];
