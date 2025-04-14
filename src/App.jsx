import "./App.css";
import { GlobalStyle } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
       <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
    </AuthProvider>
   
  );
}

export default App;
