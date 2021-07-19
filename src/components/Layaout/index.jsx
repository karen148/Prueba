import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Menu from "../Menu";
import useStyle from "./style";
import { Grid } from "@material-ui/core";
/**
 * @function
 * @name Layaout
 * @description Es el contenedor por defecto de la pagina, este contenedor llama el componente menú ya que va salir en las demas vistas
 * y el parametro children es el props donde le contenido de la vista.
 * @param {*} children
 * @returns
 */
const Layaout = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.blanco}></Box>
        <Menu />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            md={12}
            xs={12}
            style={{ marginTop: "110px", textAlign: "center" }}
          >
            {children}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Layaout.propTypes = {
  children: PropTypes.array,
};

export default Layaout;
