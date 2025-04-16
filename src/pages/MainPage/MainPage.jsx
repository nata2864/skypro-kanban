import { Outlet } from "react-router-dom";
import { Wrapper } from "./MainPage.styled";
import Header from "../../components/Header/Header";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";
import Main from "../../components/Main/main";
// import { useCallback, useState, useEffect } from "react";
// import { fetchTasks } from "../../services/api";
import TaskProvider from "../../context/TaskProvider";

function MainPage() {
  // const { user } = useContext(AuthContext);
  // const [loading, setLoading] = useState(true);
  // const [tasks, setTasks] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // });

  

  // const getTasks = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const data = await fetchTasks({
  //       token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
       
  //     });

  //     // try {
  //     //   setLoading(true);
  //     //   const data = await fetchTasks({
  //     //     token: user.token, 
  //     //   });
     
  //     if (data) setTasks(data);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [setLoading]);

  // useEffect(() => {
  //   getTasks();
  // }, [getTasks]);

  return (
    <TaskProvider>
       <Wrapper>
      <Header />
      <Main  />
      <Outlet />
    </Wrapper>
    </TaskProvider>
   
  );
}

export default MainPage;
