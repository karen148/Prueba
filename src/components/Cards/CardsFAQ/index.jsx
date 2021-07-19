import React, { useState } from "react";
import useStyle from "./style";
import { Box, Collapse, Divider, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import CardsModel from "../CardsModel";
/**
 * @function
 * @name CardsFAQ
 * @description Es la vista de la sección de preguntas la cual es tipo acordeón y también encuentra el array preguntas en data.jsx
 * @param {array} preguntas
 * @returns
 */
const CardsFAQ = ({ preguntas }) => {
  const classes = useStyle();
  /**
   * Para ver si se despliega la info en modo acordeón.
   */
  const [open, setOpen] = useState(false);
  /**
   * Identifica cual se debe desplegar.
   */
  const [id, setId] = useState(0);
  /**
   * Identifica el cambio de icono cuando se despliega el acordeón o cuando se cierra.
   */
  const [icono, setIcono] = useState(<AddIcon className={classes.add} />);
  /**
   * @description Función la cual permite identificar la pregunta que debe desplegar información y también 
   * el cambio de iconos a la pregunta identifica para desplegar la info
   * @param {number} idp 
   */
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
