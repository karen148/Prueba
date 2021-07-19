import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    height: "50px",
    backgroundColor: theme.palette.menu.main,
    marginTop: "45px",
    borderRadius: "15px",
    padding: "0px 50px",
    maxWidth: 1270,
    width: "80%",
    zIndex: 10,
  },
  img: {
    width: "40px",
    heigth: "40px",
    marginTop: "8px",
  },
  order: {
    listStyleType: "none",
    overflow: "hidden",
    textAlign: "center",
  },
  menu: {
    textDecoration: "none",
    display: "block",
    fontWeight: "bold",
    float: "left",
    color: theme.palette.primary.main,
    "&:hover": {
      border: 1,
      borderStyle: "solid",
      borderRadius: 10,
      // paddingTop: 5,
      // paddingBotton: 5,
    },
  },
  link: {
    padding: 25,
    textDecoration: "none",
    borderColor: theme.palette.primary.main,
  },
  icono: {
    marginBottom: "-5px",
  },
  iconoBolsa: {
    marginBottom: "-20px",
    fontSize: "19px",
  },
  contoador: {
    marginLeft: "20px",
    marginTop: "-15px",
    fontSize: 13,
  },
  "@media (max-width: 1496px)": {
    root: {
      width: "95%",
    },
  },
  "@media (max-width: 500px)": {
    menu: {
      fontSize: 13,
    },
    icono: {
      fontSize: 13,
      marginBottom: "-2px",
    },
    link: {
      padding: 8,
    },
    order: {
      marginLeft: "-20px"
    },
  },
}));

export default useStyle;
