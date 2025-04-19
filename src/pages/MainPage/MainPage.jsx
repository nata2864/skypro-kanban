import { Outlet } from "react-router-dom";
import { Wrapper } from "./MainPage.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/main";
import TaskProvider from "../../context/TaskProvider";

function MainPage() {
  return (
    <TaskProvider>
      <Wrapper>
        <Header />
        <Main />
        <Outlet />
      </Wrapper>
    </TaskProvider>
  );
}

export default MainPage;
