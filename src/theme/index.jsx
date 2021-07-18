import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e2f3e",
    },
    secondary: {
      main: "#36606e",
    },
    menu: {
      main: "#DBE3E5",
    },
    azul: {
      main: "#33cccc",
    },
    celeste: {
      main: "#14b2b8",
    },
    gris: {
      main: "#999999",
    },
    fondo: {
      main: "#f0f3f3",
    },
  },
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeightBold: 900,
  },
});

export default theme;
