import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  tarjeta: {
    borderRadius: 30,
    padding: "5px 20px",
    backgroundColor: "white",
  },
  contenedor: {
    position: "relative",
    "&:hover": {
      zIndex: 80,
      backgroundColor: "red",
      marginTop: 5,
      zIndex: 10,
      transition: "opacity 2s",
    },
  },
  img: {
    width: 251,
    height: 171,
    borderRadius: 15,
    marginTop: 15,
    "&:hover": {
      zIndex: 2,
      filter: "grayscale(100%)",
      marginTop: 5,
      zIndex: 10,
      transition: "opacity 2s",
    },
  },
  text: {
    marginLeft: 20,
  },
  titulo: {
    marginTop: 25,
  },
  fondo: {
    backgroundImage: "url(assets/img/product.jpg)",
    width: "100%",
    height: 200,
    borderRadius: 30,
  },
  text2: {
    marginBottom: 50,
    marginLeft: 20,
  },
  titulo2: {
    marginTop: "-5px",
    marginLeft: 20,
  },
}));

export default useStyle;
