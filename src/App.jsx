import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { GlobalStyle } from "./components/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./const";

function App() {

  return( 
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPage />
    </ThemeProvider>

    )

}

export default App;
