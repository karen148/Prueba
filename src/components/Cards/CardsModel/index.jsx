import React from "react";
import useStyle from "./style";
import { Box, Divider, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const CardsModel = ({ titulo, children, color }) => {
  const classes = useStyle();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={12} xs={12} style={{ marginTop: "80px" }}>
        <Box boxShadow={1} className={classes.tarjeta} bgcolor={color}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
              <h2>{titulo}</h2>
              <Divider />
            </Grid>
            <Grid item md={12} xs={12} style={{ textAlign: "left" }}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

CardsModel.propTypes = {
  titulo: PropTypes.string,
  children: PropTypes.array,
  color: PropTypes.string,
};

export default CardsModel;
