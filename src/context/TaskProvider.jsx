import { useState, useEffect, useCallback } from "react";
import { fetchTasks, postTask, editTask, deleteTask } from "../services/api";
import { TaskContext } from "./TaskContext";
import { textValidationErrors } from "../const";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function TaskProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  const token = user.token;

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token: token,
      });

      if (data) setTasks(data);
    } catch (error) {
      toast.error(textValidationErrors.getTasksError);
      console.error(textValidationErrors.getTasksError, error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const addNewTask = async ({ task }) => {
    try {
      const newTasks = await postTask({ token: token, task });
      setTasks(newTasks);
    } catch (error) {
      toast.error(textValidationErrors.addNewTaskError);
      console.error(textValidationErrors.addNewTaskError, error);
    }
  };

  const updateTask = async ({ task, id }) => {
    try {
      const newTasks = await editTask({ token: token, id, task });
      setTasks(newTasks);
    } catch (error) {
      toast.error(textValidationErrors.updateTaskError);
      console.error(textValidationErrors.updateTaskError, error);
    }
  };

  const deleteTaskById = async ({ id }) => {
    try {
      const newTasks = await deleteTask({ token: token, id });
      setTasks(newTasks);
    } catch (error) {
      toast.error(textValidationErrors.deleteTaskError);
      console.error(textValidationErrors.deleteTaskError, error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        tasks,
        addNewTask,
        updateTask,
        deleteTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
