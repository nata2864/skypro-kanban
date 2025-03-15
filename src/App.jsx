import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import Main from "./components/Main/Main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="wrapper">
      {/* <PopBrowse /> */}
      <Header />
      <Main loading={loading} />
    </div>
  );
}

export default App;
