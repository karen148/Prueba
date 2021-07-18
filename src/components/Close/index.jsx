import React from "react";
import useStyle from "./style";
import { Button, Divider, Grid } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const Close = () => {
  const classes = useStyle();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={10} xs={8} style={{ textAlign: "center" }}>
        <Divider />
      </Grid>
      <Grid item md={2} xs={2} style={{ textAlign: "right" }}>
        <Button className={classes.boton}>
          CLOSE <CancelIcon className={classes.icono} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Close;
