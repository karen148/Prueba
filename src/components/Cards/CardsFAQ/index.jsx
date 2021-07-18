import React from "react";
import useStyle from "./style";
import { Box, Collapse, Divider, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CardsModel from "../CardsModel";

const CardsFAQ = ({ foto }) => {
  const classes = useStyle();
  return (
    <CardsModel titulo={"FAQ - Sales Questions"}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={12} className={classes.titulo}>
          <Box>
            <Collapse></Collapse>
          </Box>
          <Divider />
        </Grid>
      </Grid>
      <br></br>
    </CardsModel>
  );
};

CardsFAQ.propType = {
  foto: PropTypes.array,
};

export default CardsFAQ;
