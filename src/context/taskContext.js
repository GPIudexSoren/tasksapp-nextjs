import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'First task',
            description: 'Some task'
        }
    ]);

    const getTasksLength = () => tasks.length;
    
    return <TaskContext.Provider value={
        { tasks, getTasksLength }
    }>{ children }</TaskContext.Provider>
}

export default TasksProvider;
