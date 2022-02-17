import dbTasksFile from './data/tasks.json';

const { tasks } = dbTasksFile;

export const getTasksByUser = (user) => {
    const result = tasks.filter(task => task.user === user);

    return result;
}

export const createTask = (task) => {

}

export const updateTask = (task) => {
    
}