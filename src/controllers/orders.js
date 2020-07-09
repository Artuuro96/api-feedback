const saveOrder = require("../services/order/saveOrder");

const createOrder = async (req, res) => {
    try {
        return res.status(201).jsonp(
            await saveOrder(req)
        );
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createOrder
};