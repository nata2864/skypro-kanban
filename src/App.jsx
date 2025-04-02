import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { GlobalStyle } from "./components/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthForm/>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
