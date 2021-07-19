import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 1360,
    padding: "0px 109px",
    fontFamily: "Source Sans Pro",
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
  "@media (max-width: 600px)": {
    root: {
      padding: "0px 0px",
    },
  },
}));

export default useStyle;
