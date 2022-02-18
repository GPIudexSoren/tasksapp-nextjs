export const getTasksByUser = (user) => {
    const result = JSON.parse(localStorage.getItem(`${user}-tasks`));

    return result;
}

export const createTask = (task) => {
    let currentTasks = getTasksByUser(task.user);
    if (!currentTasks) {
        currentTasks = [];
    };
    currentTasks.push(task);
    localStorage.setItem(`${task.user}-tasks`, JSON.stringify(currentTasks));
}

export const updateTask = (task) => {
    
}