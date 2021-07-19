import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useStyle from "./style";

const BotonFlotante = () => {
  const classes = useStyle();
  const scrollUp = () => {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 10);
    }
  };

  window.onscroll = () => {
    var buttonUp = document.getElementById("arriba");
    var scroll = document.documentElement.scrollTop;

    if (scroll > 800) {
      buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
      buttonUp.style.transform = "scale(0)";
    }
  };
  return (
    <>
      <a className={classes.float} id="arriba" onClick={scrollUp}>
        <ArrowUpwardIcon />
      </a>
    </>
  );
};
export default BotonFlotante;
