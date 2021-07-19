import React from "react";
import { Button, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Close from "../../components/Close";
import Etiquetas from "../../components/Etiquetas";
import Layaout from "../../components/Layaout";
import img from "./../../assets/img/product.jpg";
import useStyle from "./style";
import Logos from "../../components/Logos";
import CardsPreguntas from "../../components/Cards/CardsPreguntas";
import CardsProduct from "../../components/Cards/CardsProduct";
import CardsFAQ from "../../components/Cards/CardsFAQ";
import CardsRecom from "../../components/Cards/CardsRecom";
import { Etiqueta, foto, imagen, items, pregunta } from "./data";
import BotonFlotante from "../../components/BotonFlotante";
/**
 * @function
 * @name Cloud
 * @description Es una vista que recibe componentes con sus correspondientes datas, las cuales los encontrara en el archivo data.jsx
 * en la misma carpeta Cloud
 * @returns
 */
const Cloud = () => {
  const classes = useStyle();

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
          <h1 className={classes.titulo}>HAFN-IT CLOUD CONNECT</h1>
          <h3 className={classes.subtitulo}>
            The as-is analysis for cost evaluation
          </h3>
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
                  <b>Price:</b> Individual offer<br></br> <b>Duration:</b> 3-7
                  days (depending on company size)<br></br> <b>Billing type:</b>{" "}
                  Billing based on actual expenditure.<br></br>{" "}
                  <b>Contract type:</b> Project order<br></br>
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
        <Grid item md={12} xs={12} className={classes.bajo}>
          <CardsRecom items={items} />
        </Grid>
      </Grid>
      <BotonFlotante />
    </Layaout>
  );
};

export default Cloud;
