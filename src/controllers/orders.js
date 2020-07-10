const saveOrder = require("../services/order/saveOrder");
const editOrder = require("../services/order/editOrder");
const eliminateOrder = require("../services/order/eliminateOrder");
const getOrder = require("../services/order/getOrder");

const createOrder = async (req, res) => {
    return await saveOrder(req, res);
}

const upateOrder = async (req, res) => {
    return await editOrder(req, res);
}

const deleteOrder = async (req, res) => {
    return await eliminateOrder(req, res);
}

const readOrders = async (req, res) => {
    return await getOrder(req, res);
}

module.exports = {
    createOrder,
    upateOrder,
    deleteOrder,
    readOrders
};