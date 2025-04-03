import "./App.css";
import { GlobalStyle } from "./components/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
