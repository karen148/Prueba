import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import theme from "./theme";
import Cloud from "./Views/Cloud";

/**
 * @function
 * @name App
 * @description Se utiliza como framework de diseño Material-ui
 * @returns
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cloud />
    </ThemeProvider>
  );
}

export default App;
