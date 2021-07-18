import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  enlace: {
    filter: "grayscale(100%)",
    "&:hover": {
      transitionDuration: "1s",
      filter: "grayscale(0%)",
    },
  },
  imagen:{
    padding: "10px 0px"
  }
}));

export default useStyle;
