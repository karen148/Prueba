import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Menu from "../Menu";
import useStyle from "./style";
import { Container, Grid } from "@material-ui/core";

const Layaout = ({ children }) => {
  const classes = useStyle();
  return (
    <Container  maxWidth="lg" className={classes.root}>
      <Box className={classes.content}>
        <Menu />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={12} xs={12} style={{marginTop: "110px", textAlign:"center"}}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Layaout.propTypes = {
  children: PropTypes.object,
};

export default Layaout;
