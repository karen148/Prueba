import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  root: {
    maxWidth: 1360,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Source Sans Pro",
    width: "80%",
    "& .MuiDivider-root": {
      backgroundColor: "rgb(237 237 237)",
    },
  },
  content: {
    boxSizing: "content-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
  },
  blanco: {
    backgroundColor: "white",
    display: "flex",
    position: "fixed",
    width: "100%",
    height: 60,
    zIndex: 10,
  },
  "@media (max-width: 1360px)": {
    root: {
      padding: "0px 0px",
    },
  },
  "@media (min-width: 1360px) and (max-width: 1600px)": {
    root: {
      maxWidth: 1360,
      width: "86%"
    },
  },
  "@media (max-width: 600px)": {
    root: {
      padding: "0px 0px",
    },
  },
}));

export default useStyle;
