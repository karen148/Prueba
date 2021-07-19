import React, { Fragment } from "react";
import useStyle from "./style";
import { Divider, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
/**
 * @function
 * @name Fotos
 * @description Son las fotos que salen en el componente CardsProduct (Product Pitch), se recorre el array fotos el cual 
 * se encuentra en el archivo data.jsx en la carpeta Cloud
 * @param {array} fotos 
 * @returns 
 */
const Fotos = ({ foto }) => {
  const classes = useStyle();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      {foto?.map((item, index) => {
        return (
          <Fragment key={index + 1}>
            <Grid item xs={2} md={2}>
              <img src={item.img} alt="Foto" className={classes.foto} />
            </Grid>
            <Grid item xs={10} md={10}>
              <h3 className={classes.text}>{item.titulo}</h3>
              <p className={classes.altura}>{item.descripcion}</p>
            </Grid>
            <Grid item xs={12} md={12} className={classes.linea}>
              <Divider />
            </Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
};

Fotos.propTypes = {
  foto: PropTypes.array,
};

export default Fotos;
