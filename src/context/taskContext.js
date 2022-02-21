import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "./authContext";
import { 
    getTasksByUser, 
    createTask as dbCreateTask, 
    updateTask as dbUpdateTask 
} from '../database/dbTasks';

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const TasksProvider = ({ children }) => {
    const { loggedUser } = useAuth();
    const currentTaskInitialValue = {
        id: 0,
        title: '',
        description: '',
        date: 0,
        user: loggedUser.username
    };

    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({
        ...currentTaskInitialValue
    });

    const getUserTasks = () => {
        const tasks = getTasksByUser(loggedUser.username);
        setTasks(tasks);
    }

    const resetCurrentTask = () => {
        setCurrentTask({ ...currentTaskInitialValue });
    }

    const getTasksLength = () => tasks.length;

    const createTask = (task) => {
        task.id = uuidv4();
        task.user = loggedUser.username;
        task.date = Date.now(),

        dbCreateTask(task);
        setTasks([...tasks, task]);
    }

    const updateTask = (task) => {
        task.user = loggedUser.username;
        task.date = Date.now(),
        dbUpdateTask(task);
        setTasks(currentValue => currentValue.map(t => t.id === task.id ? task : t));
    }

    return <TaskContext.Provider
        value={
            {
                tasks,
                currentTask,
                getUserTasks,
                getTasksLength,
                setCurrentTask,
                resetCurrentTask,
                createTask,
                updateTask
            }
        }>{children}</TaskContext.Provider>
}

export default TasksProvider;
