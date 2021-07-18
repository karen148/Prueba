import React from "react";
import useStyle from "./style";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CardsModel from "../CardsModel";
import Fotos from "../../Fotos";

const CardsProduct = ({ foto }) => {
  const classes = useStyle();
  return (
    <CardsModel titulo={"Product Pitch"}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={6} className={classes.titulo}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/c8yjlteWiHU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
            style={{borderRadius: "30px"}}
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} className={classes.titulo}>
          <Fotos foto={foto} />
        </Grid>
      </Grid>
      <br></br>
    </CardsModel>
  );
};

CardsProduct.propType = {
  foto: PropTypes.array,
};

export default CardsProduct;
