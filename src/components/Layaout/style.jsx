import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    "@media (min-width: 600px)": {
      "& .MuiContainer-root": {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
    },
    "& .MuiDivider-root": {
      backgroundColor: "rgb(237 237 237)",
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
  },
}));

export default useStyle;
