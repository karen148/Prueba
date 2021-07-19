import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  bajo: {
    marginBottom: 50,
  },
  titulo: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
  subtitulo: {
    marginTop: "-15px",
    fontSize: 24,
    color: theme.palette.primary.main,
  },
  estrella: {
    color: theme.palette.azul.main,
    textAlign: "right",
    marginTop: "0px",
  },
  estrella2: {
    color: theme.palette.gris.main,
  },
  icono: {
    fontSize: 18,
    marginLeft: 80,
    position: "absolute",
    right: 14,
  },
  text: {
    textAlign: "left",
    color: theme.palette.primary.main,
    marginBottom: 28,
  },
  contenedor: {
    paddingLeft: "50px",
  },
  caja: {
    borderRadius: 30,
    backgroundColor: theme.palette.fondo.main,
    padding: "1px 25px",
    marginTop: 15,
    marginBottom: 15,
  },
  text2: {
    fontSize: 17,
    color: theme.palette.gris.main,
  },
  carrito: {
    height: 36,
    color: "white",
    borderRadius: 20,
    width: 300,
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.primary.main,
    float: "left",
    "&:hover": {
      backgroundColor: theme.palette.celeste.main,
    },
  },
}));

export default useStyle;
