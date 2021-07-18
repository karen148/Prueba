import React from "react";
import useStyle from "./style";
import { Divider, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const Logos = ({ imagenes }) => {
  const classes = useStyle();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        md={12}
        xs={12}
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        <Divider />
      </Grid>
      <Grid item md={12} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {imagenes.map((item, index) => {
            return (
              <Grid item md={2} xs={12} key={index + 1}>
                <a href={item.link} className={classes.enlace}>
                  <img src={item.imagen} alt="logos" className={classes.imagen}/>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
        <Divider />
      </Grid>
    </Grid>
  );
};

Logos.propTypes = {
  imagenes: PropTypes.array,
};

export default Logos;
