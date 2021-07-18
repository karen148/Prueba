import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyle = makeStyles((theme) => ({
  root: {
    Width: 1360,
    padding: "0px 109px",
    fontFamily: theme.typography.fontFamily,
    "& .MuiDivider-root": {
      backgroundColor: "rgb(237 237 237)",
    },
  },
  content: {
    boxSizing: "content-box",
    width:"100%",
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
  "@media (min-width: 1360px)": {
    "& .MuiContainer-maxWidthLg": {
      maxWidth: "1360px !important",
    },
  },
  "@media (min-width: 600px)": {
    "& .MuiContainer-root": {
      paddingLeft: "0px !important",
      paddingRight: "0px !important",
    },
  },
}));

export default useStyle;
