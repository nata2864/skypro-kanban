// import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
// import Main from "./components/Main/Main";
import Header from "../Header/Header";
import Main from "../Main/Main";

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="wrapper">
      <Header />
      <Main loading={loading} />
    </div>
  );
}

export default MainPage;
