import React from "react";
import PropTypes from "prop-types";
import CardsModel from "../CardsModel";
import theme from "./../../../theme";
import CardsItems from "../CardsItems";

const CardsRecom = ({ items }) => {
  return (
    <CardsModel
      titulo={"We also recommend the following products"}
      color={theme.palette.menu.main}
    >
      <CardsItems items={items}/>
      <br></br>
    </CardsModel>
  );
};

CardsRecom.propType = {
  items: PropTypes.array,
};

export default CardsRecom;
