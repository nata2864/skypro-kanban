
import { Wrapper } from "./MainPage.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function MainPage({loading}) {
  
  return (
    <Wrapper>
      <Header />
      <Main loading={loading}/>
    </Wrapper>
  );
}

export default MainPage;
