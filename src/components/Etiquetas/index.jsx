import React from "react";
import useStyle from "./style";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Button from "@material-ui/core/Button";

const Etiquetas = ({ etiquetas }) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {etiquetas.map((item, index) => {
        return (
          <Grid
            item
            md={2}
            xs={12}
            style={{ textAlign: "center" }}
            key={index + 1}
          >
            <Button onClick={item.function} className={classes.boton}>
              {item.nombre} <LocalOfferIcon className={classes.icono} />
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

Etiquetas.propTypes = {
  etiquetas: PropTypes.array,
};

export default Etiquetas;
