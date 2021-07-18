import React, { useState } from "react";
import useStyle from "./style";
import { Box, Collapse, Divider, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import CardsModel from "../CardsModel";

const CardsFAQ = ({ preguntas }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [icono, setIcono] = useState(<AddIcon className={classes.add} />);
  const Open = (idp) => {
    setOpen(!open);
    setId(idp);
    setIcono(
      !open ? (
        <CloseIcon className={classes.cancel} />
      ) : (
        <AddIcon className={classes.add} />
      )
    );
  };
  return (
    <CardsModel titulo={"FAQ - Sales Questions"} color="white">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        position="fixed"
      >
        {preguntas?.map((item) => {
          return (
            <Grid item xs={12} md={12} key={item.id}>
              <Box>
                <Box
                  onClick={() => Open(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <h4>
                    {item.id === id ? (
                      icono
                    ) : (
                      <AddIcon className={classes.add} />
                    )}
                    {item.pregunta}
                  </h4>
                  <Divider />
                </Box>
                <Collapse
                  in={item.id === id && open}
                  timeout="auto"
                  unmountOnExit
                >
                  <p>{item.contenido}</p>
                </Collapse>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <br></br>
    </CardsModel>
  );
};

CardsFAQ.propType = {
  preguntas: PropTypes.array,
};

export default CardsFAQ;
