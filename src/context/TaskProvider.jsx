import { useState, useEffect,useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { fetchTasks} from "../services/api";
import { TaskContext } from "./TaskContext";


function TaskProvider({ children }){
   const [loading, setLoading] = useState(true);
   const [tasks, setTasks] = useState([]);
   const [error, setError] = useState("");
 
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
 
       // try {
       //   setLoading(true);
       //   const data = await fetchTasks({
       //     token: user.token, 
       //   });
      
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

     return (
        <TaskContext.Provider value={{ loading, error,tasks }}>
           {children}
        </TaskContext.Provider>
     );
}



export default TaskProvider