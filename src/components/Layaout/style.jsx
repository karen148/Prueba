import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    "@media (min-width: 600px)": {
      "& .MuiContainer-root": {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
  },
}));

export default useStyle;
