import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./authContext";
import { getTasksByUser, createTask as dbCreateTask } from '../database/dbTasks';

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const TasksProvider = ({ children }) => {
    const { loggedUser } = useAuth();
    const [tasks, setTasks] = useState([]);

    const getUserTasks = () => {
        const tasks = getTasksByUser(loggedUser.username);
        setTasks(tasks);
    }

    const getTasksLength = () => tasks.length;

    const createTask = (task) => {
        task.id = uuidv4();
        task.user = loggedUser.username;

        dbCreateTask(task);
        setTasks([...tasks, task]);
    }

    return <TaskContext.Provider 
    value={
        {
            tasks,
            getUserTasks,
            getTasksLength,
            createTask
        }
    }>{children}</TaskContext.Provider>
}

export default TasksProvider;
