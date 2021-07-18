import React from "react";
import useStyle from "./style";
import CardsModel from "../CardsModel";
import theme from "./../../../theme";
import CardsItems from "../CardsItems";

const CardsRecom = () => {
  const classes = useStyle();
  return (
    <CardsModel
      titulo={"We also recommend the following products"}
      color={theme.palette.menu.main}
    >
      <CardsItems />
      <br></br>
    </CardsModel>
  );
};

export default CardsRecom;
