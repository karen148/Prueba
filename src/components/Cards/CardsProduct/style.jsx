import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  text: {
    marginLeft: 20,
  },
  titulo: {
    marginTop: 25,
  },
  fondo: {
    backgroundImage: "url(assets/img/product.jpg)",
    width: "100%",
    height: 200,
    borderRadius: 30,
  },
  text2: {
    marginBottom: 50,
    marginLeft: 20,
  },
  titulo2:{
    marginTop: "-5px",
    marginLeft: 20,
  }
}));

export default useStyle;
