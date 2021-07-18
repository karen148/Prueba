import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  tarjeta: {
    borderRadius: 30,
    padding: "5px 20px",
    backgroundColor: "white",
    display: "fixed",
    marginTop: 20,
    height: "90%",
    width: 255,
  },
  contenedor: {
    position: "relative",
    display: "fixed",
    width: 251,
    height: 171,
    zIndex: 20,
    borderRadius: 15,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  img: {
    width: 251,
    height: 171,
    borderRadius: 15,
    marginTop: 15,
    "&:hover": {
      zIndex: 2,
      position: "absolute",
      zIndex: 10,
      marginTop: 5,
      transition: "opacity 1s",
      opacity: "0.2",
    },
  },
  text: {
    marginTop: -10,
  },
  altura: {
    marginTop: 20,
  },
}));

export default useStyle;
