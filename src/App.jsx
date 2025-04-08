import "./App.css";
import { GlobalStyle } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
