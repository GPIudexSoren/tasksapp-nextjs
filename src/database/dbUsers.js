import dbUsersFile from './data/users.json';

const { users } = dbUsersFile;

export const getAllUsers = () => {
    return users;
}

export const getUser = (username) => {
    const result = users.find(user => user.username === username)

    return result;
}