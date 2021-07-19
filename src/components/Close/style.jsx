import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  boton: {
    border: 2,
    fontFamily: "Nunito Sans, sans-serif",
    borderColor: theme.palette.secondary.main,
    borderRadius:"15px",
    borderStyle: "solid",
    fontSize: 9,
    fontWeight: "bold",
    padding:"8px 16px",
    height: 31,
    color: theme.palette.secondary.main,
    '&:hover':{
      backgroundColor: "#14b2b8",
      borderColor: "#14b2b8",
      color: "white"
    }
  },
  icono:{
    fontSize: 14,
    marginLeft: 14,
  }
}));

export default useStyle;
