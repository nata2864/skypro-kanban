import { useState, useEffect,useCallback,useContext } from "react";
import { AuthContext } from "./AuthContext";
import { fetchTasks,postTask,editTask, deleteTask} from "../services/api";
import { TaskContext } from "./TaskContext";


function TaskProvider({ children }){
   const [loading, setLoading] = useState(true);
   const [tasks, setTasks] = useState([]);
   const [error, setError] = useState("");
   const { user } = useContext(AuthContext);
 
   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   });
 
   
 
   const getTasks = useCallback(async () => {
     try {
       setLoading(true);
       const data = await fetchTasks({
         token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
        
       });
 
      //  try {
      //    setLoading(true);
      //    const data = await fetchTasks({
      //      token: user.token, 
      //    });
      
       if (data) setTasks(data);
     } catch (error) {
       setError(error.message);
     } finally {
       setLoading(false);
     }
   }, [setLoading]);
 
   useEffect(() => {
     getTasks();
   }, [getTasks]);


   const addNewTask = async ({ task }) => {
      try {
         const newTasks = await postTask({ token: user?.token, task });
         setTasks(newTasks);
      } catch (error) {
         console.error("Ошибка добавления задачи", error);
      }
   };

   const updateTask = async ({  task, id }) => {
      try {
         const newTasks = await editTask({ token: user?.token,id,  task });
         setTasks(newTasks);
      } catch (error) {
         console.error("Ошибка добавления задачи", error);
      }
   };

   const deleteTaskById = async ({ id }) => {
      try {
        const newTasks = await deleteTask({ token: user?.token, id });
        setTasks(newTasks);
      } catch (error) {
        console.error("Ошибка удаления задачи", error);
      }
    };



     return (
        <TaskContext.Provider value={{
         loading,
         error,
         tasks,
         addNewTask,
         updateTask,
         deleteTaskById, 
       }}>
           {children}
        </TaskContext.Provider>
     );
}



export default TaskProvider