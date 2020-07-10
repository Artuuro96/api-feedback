const getUsers = require("../services/user/getUser");
const saveUser = require("../services/user/saveUser");
const editUser = require("../services/user/editUser");
const eliminateUser = require("../services/user/eliminateUser");

const readUsers = async (req, res) => {
    return await getUsers(req, res);
}

const createUser = async (req, res) => {
    return await saveUser(req, res);    
}

const updateUser = async (req, res) => {
    return await editUser(req, res);    
}

const deleteUser = async (req, res) => {
    return await eliminateUser(req, res);
    return res.json({
        message: true
    })
}

module.exports = { 
    readUsers,
    createUser,
    updateUser,
    deleteUser
};