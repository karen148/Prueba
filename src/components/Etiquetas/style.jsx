import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  boton: {
    fontFamily: "Nunito Sans, sans-serif",
    border: 2,
    borderColor: theme.palette.secondary.main,
    borderRadius: "20px",
    borderStyle: "solid",
    fontSize: 11,
    fontWeight: "bold",
    padding: "9px 18px",
    height: 38,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
  icono: {
    fontSize: 16,
    marginLeft: 5,
  },
}));

export default useStyle;
