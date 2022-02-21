export const getTasksByUser = (user) => {
    let result = JSON.parse(localStorage.getItem(`${user}-tasks`));

    if (!result) {
        result = [];
    }

    return result;
}

export const createTask = (task) => {
    let currentTasks = getTasksByUser(task.user);
    if (!currentTasks) {
        currentTasks = [];
    }
    currentTasks.push(task);
    localStorage.setItem(`${task.user}-tasks`, JSON.stringify(currentTasks));
}

export const updateTask = (task) => {
    let currentTasks = getTasksByUser(task.user);
    if (!currentTasks || !currentTasks.length) {
        currentTasks = [];
        currentTasks.push(task);
    } else {
        currentTasks = currentTasks.map(t => t.id === task.id ? task : t);
    }
    localStorage.setItem(`${task.user}-tasks`, JSON.stringify(currentTasks));
}