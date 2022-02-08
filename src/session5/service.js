const { readUsers, removeUsers, saveUser, readUser } = require('./usersIo');

function getUsers() {
    return readUsers();
}

function getUser(userName) {
    const user = readUser(userName);
    return user;
}

function createUser(userData) {
    return saveUser(userData);
}

function clearUsers() {
    return removeUsers();
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    clearUsers
};
