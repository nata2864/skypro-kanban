import "./App.css";

import { GlobalStyle } from "./components/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";
import AuthForm from "./components/AuthForm/AuthForm";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <AuthForm/> */}
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
