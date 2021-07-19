import React from "react";
import PropTypes from "prop-types";
import useStyle from "./style";
import { Box, Grid } from "@material-ui/core";

const CardsItems = ({ items }) => {
  const classes = useStyle();
  console.log(items);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {items?.map((it, index) => {
        return (
          <Grid item xs={12} md={3} key={index + 1}>
            <Box boxShadow={1} className={classes.tarjeta}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
                  <div className={classes.contenedor}>
                    <img src={it.img} alt="imagen" className={classes.img} />
                  </div>
                </Grid>
                <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
                  <h2>{it.titulo}</h2>
                </Grid>
                <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
                  <p className={classes.text}>{it.contenido}</p>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

CardsItems.propType = {
  items: PropTypes.array,
};

export default CardsItems;
