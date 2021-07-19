import React from "react";
import useStyle from "./style";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Button from "@material-ui/core/Button";

/**
 * @function
 * @name Etiquetas
 * @description Son los botones que salen debajo del subtítulo principal por ejemplo(The as-is analysis for cost evaluation),
 * la información de los botones sé en encuentra en el array Etiquetas el cual se encuentra en el archivo data.jsx en la carpeta Cloud
 * @param {array} etiquetas 
 * @returns 
 */
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
