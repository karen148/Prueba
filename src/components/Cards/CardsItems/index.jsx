import React from "react";
import useStyle from "./style";
import { Box, Grid } from "@material-ui/core";
import CardsModel from "../CardsModel";
import img from "./../../../assets/img/producto2.jpg";
import theme from "./../../../theme";

const CardsItems = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justifyContent="left"
      alignItems="left"
      spacing={2}
    >
      <Grid item xs={12} md={3} className={classes.titulo}>
        <Box boxShadow={1} className={classes.tarjeta}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
              <div className={classes.contenedor}>
                <img src={img} alt="imagen" className={classes.img} />
              </div>
            </Grid>
            <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
              <h2>Cloud</h2>
            </Grid>
            <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
              <h2>blalblabla</h2>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardsItems;
