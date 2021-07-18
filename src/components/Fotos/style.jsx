import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  foto: {
    width: 60,
    height: 60,
  },
  text: {
    marginLeft: "-25px",
  },
  altura: {
    marginTop: "-15px",
    marginLeft: "-25px",
  },
  linea: {
    padding: "15px 0px",
  },
  "@media (max-width: 1024px)": {
    text: {
      marginLeft: "18px",
    },
    altura: {
      marginTop: "-15px",
      marginLeft: "18px",
    },
  },
}));

export default useStyle;
