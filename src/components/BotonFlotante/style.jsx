import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  float: {
    position: "fixed",
    width: 40,
    height: 40,
    bottom: 40,
    right: 40,
    zIndex: 8,
    border: 1,
    paddinTop: 20,
    textAlign: "center",
    borderRadius: 30,
    boxShadow: "0px 0px 5x 1px black",
    cursor: "pointer",
    transition: "all 300ms ease",
    transform: "scale(0)",
  },
}));

export default useStyle;
