const { readFileSync, writeFileSync} = require('fs');
const { resolve } = require('path');

const usersPath = resolve(__dirname, './users.json');

function readJsonFile(filePath) {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function writeJsonFile(filePath, data) {
    return writeFileSync(filePath, JSON.stringify(data), 'utf-8');
}

function userExists(userName) {
    return !!readUser(userName);
}

function readUsers() {
    return readJsonFile(usersPath);
}

function readUser(userName) {
    return readUsers().find(user => user.userName === userName);
}

function saveUser(userData) {
    if (userExists(userData.userName)) {
        throw new Error();
    }

    const users = readUsers();
    users.push(userData);
    writeJsonFile(usersPath, users);
    return userData;
}

function removeUsers() {
    writeJsonFile(usersPath, []);
    return [];
}

module.exports = {
    readUsers,
    readUser,
    saveUser,
    removeUsers
};
