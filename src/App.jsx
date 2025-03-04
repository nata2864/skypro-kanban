import "./App.css";
import Header from "./components/Header/Header";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import Main from "./components/Main/Main";
import PopExit from "./components/PopUps/PopExit/PopExit";

function App() {
  return (
    <body>
      <div class="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </body>
  );
}

export default App;
