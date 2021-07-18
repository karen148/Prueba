import React from "react";
import { Button, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Close from "../../components/Close";
import Etiquetas from "../../components/Etiquetas";
import Layaout from "../../components/Layaout";
import img from "./../../assets/img/product.jpg";
import img1 from "./../../assets/img/foto1.png";
import img2 from "./../../assets/img/foto2.png";
import logo1 from "./../../assets/img/logo1.png";
import logo2 from "./../../assets/img/logo2.png";
import logo3 from "./../../assets/img/logo3.png";
import logo4 from "./../../assets/img/logo4.png";
import logo5 from "./../../assets/img/logo5.png";
import logo6 from "./../../assets/img/logo6.png";
import useStyle from "./style";
import Logos from "../../components/Logos";
import CardsPreguntas from "../../components/Cards/CardsPreguntas";
import CardsProduct from "../../components/Cards/CardsProduct";
import CardsFAQ from "../../components/Cards/CardsFAQ";
import CardsRecom from "../../components/Cards/CardsRecom";

const Cloud = () => {
  const classes = useStyle();
  const preventDefault = (event) => event.preventDefault();
  const Etiqueta = [
    {
      nombre: "MANAGED SERVICES",
      funcion: preventDefault,
    },
    {
      nombre: "MODERN WORKPLACE",
      funcion: preventDefault,
    },
  ];
  const imagen = [
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
  const foto = [
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
  const pregunta = [
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
  return (
    <Layaout>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} xs={12}>
          <Close></Close>
        </Grid>
        <Grid item md={12} xs={12}>
          <h1>HAFN-IT CLOUD CONNECT</h1>
          <h3>The as-is analysis for cost evaluation</h3>
        </Grid>
        <Grid item md={12} style={{ marginBottom: "100px" }}>
          <Etiquetas etiquetas={Etiqueta} />
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <img
                src={img}
                alt="Iamgen"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.contenedor}>
              <h2 className={classes.estrella}>
                ★★★★<font className={classes.estrella2}>★</font>
              </h2>
              <h2 className={classes.text}>
                ACTUAL analysis for cost evaluation
              </h2>
              <p className={classes.text}>
                Translate safely to the cloud: HAFN IT Cloud Connect Lift &
                Shift is not our thing. Based on your existing IT setup, we
                create the prerequisites for using Microsoft cloud services
                efficiently for your business.
              </p>
              <Box className={classes.caja}>
                <h1 className={classes.text}>
                  according to expenditure /
                  <font className={classes.text2}>excl. VAT</font>
                </h1>
                <p className={classes.text}>
                  <b>Price:</b> Individual offer <b>Duration:</b> 3-7 days
                  (depending on company size) <b>Billing type:</b> Billing based
                  on actual expenditure. <b>Contract type:</b> Project order
                </p>
              </Box>
              <Button className={classes.carrito}>
                ADD TO LIST <AddShoppingCartIcon className={classes.icono} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <Logos imagenes={imagen} />
        </Grid>
        <Grid item md={12} xs={12}>
          <CardsPreguntas />
        </Grid>
        <Grid item md={12} xs={12}>
          <CardsProduct foto={foto} />
        </Grid>
        <Grid item md={12} xs={12}>
          <CardsFAQ preguntas={pregunta} />
        </Grid>
        <Grid item md={12} xs={12}>
          <CardsRecom />
        </Grid>
      </Grid>
    </Layaout>
  );
};

export default Cloud;
