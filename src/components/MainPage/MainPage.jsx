import { useState, useEffect } from "react";
import { Wrapper } from "./MainPage.styled";
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
    <Wrapper>
      <Header />
      <Main loading={loading} />
    </Wrapper>
  );
}

export default MainPage;
