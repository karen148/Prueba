import React from "react";
import useStyle from "./style";
import { Grid } from "@material-ui/core";
import CardsModel from "../CardsModel";
import img from "./../../../assets/img/product_2.jpg";

const CardsPreguntas = () => {
  const classes = useStyle();
  return (
    <CardsModel titulo={"Why, How, What"} color="white">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={6} className={classes.titulo}>
          <h3>Why?</h3>
          <p>
            It is our goal to define a well-manageable and scalable platform for
            you, which can be adapted and operated according to your
            requirements. After the HAFN IT Cloud Connect Assessment, you have
            all the relevant information about the technological solution, a
            concrete estimate of the cost of implementation and the expected
            operation
          </p>
          <br></br>
          <img src={img} alt="Imagen" className={classes.fondo} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.titulo}>
          <h3 className={classes.text}>How?</h3>
          <p className={classes.text2}>
            Building on the experience from numerous projects, we collect your
            current initial situation using extensive questionnaires and
            analysis tools, without having to evaluate them together in
            workshops for days. We illuminate the basic infrastructure such as
            internet access or network, as well as the applications, end devices
            or the qualifications and capacities of existing IT staff and
            employees.
          </p>
          <br></br>
          <h3 className={classes.titulo2}>What?</h3>
          <p className={classes.text}>
            In the HAFN IT Cloud Connect Assessment, we evaluate your initial
            situation and jointly define the relevant goals in order to
            implement a scalable platform based on the Microsoft Cloud that can
            be efficiently controlled with existing resources. We summarize all
            findings in a detailed concept, which transparently shows you all
            necessary steps and efforts and gives concrete recommendations for
            licenses.
          </p>
        </Grid>
      </Grid>
      <br></br>
    </CardsModel>
  );
};

export default CardsPreguntas;
