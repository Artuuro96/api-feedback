const Order = require("../schemas/orders");
const User = require("../schemas/users");

const getLastFeedbacks = async () => {
    try {
        const lastFeedbacks = await Order.find().sort({ $natural: -1 }).limit(20).catch(error => {
            throw error;
        });
        return lastFeedbacks;
    } catch (error) {
        throw error;
    }
}

const getFeedbacksByRating = async (rating) => {
    try {
        const feedbacks = await Order.find({
            "feedback.rate": rating
        }).catch(error => {
            throw error;
        });
        return feedbacks;
    } catch (error) {
        throw error;
    }
}

const updateFeedback = async (feedback, idOrder, idUser) => {
    try {
        const userUpdated = await Order.findByIdAndUpdate({
            _id: idOrder,
            idUser
        }, feedback, {
            new: true,
            useFindAndModify: false
        }).catch(error => {
            throw error;
        });
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

const getFeedbacks = async (idOrder) => {
    try {
        const query = idOrder ? { _id: idOrder } : {};
        const orders = await Order.find(query).catch(error => {
            throw error
        })
        return orders;
    } catch (error) {
        throw error;
    }
}

const deleteFeedback = async (order, idOrder, idUser) => {
    try {
        order.feedback = "";
        const feedbackUpdated = await Order.findByIdAndUpdate({
            _id: idOrder,
            idUser
        }, order, {
            new: true,
            useFindAndModify: false
        }).catch(error => {
            throw error;
        });
        return feedbackUpdated;
    } catch (error) {
        throw error;
    }
}

const saveOder = async (order) => {
    try {
        const newOrder = new Order(order);
        const res = await newOrder.save().catch(error => {
            throw error;
        });
        return res;
    } catch (error) {
        throw error;
    }
}

const updateOrder = async (order, idOrder) => {
    try {
        const userUpdated = await Order.findByIdAndUpdate({
            _id: idOrder
        }, order, {
            new: true,
            useFindAndModify: false
        }).catch(error => {
            throw error;
        });
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

const getOrders = async (idOrder) => {
    try {
        const query = idOrder ? { _id: idOrder } : {};
        const orders = await Order.find(query).catch(error => {
            throw error
        })
        return orders;
    } catch (error) {
        throw error;
    }
}

const deleteOrder = async (idOrder, idUser) => {
    try {
        await Order.deleteOne({
            _id: idOrder,
            idUser
        }).catch(error => {
            throw error;
        });
        return true;
    } catch (error) {
        throw error;
    }
}

const saveUser = async (user) => {
    try {
        const newUser = new User({
            idUser: user.idUser,
            name: user.name,
            username: user.username,
            lastName: user.lastName
        });
        const res = await newUser.save().catch(error => {
            throw error;
        });
        return res;
    } catch (error) {
        throw error;
    }
}

const getUsers = async (idUser) => {
    try {
        const query = idUser ? { _id: idUser } : {};
        const users = await User.find(query).catch(error => {
            throw error
        })
        return users;
    } catch (error) {
        throw error;
    }
}

const updateUser = async (user, idUser) => {
    try {
        const userUpdated = await User.findByIdAndUpdate({
            _id: idUser
        }, user, {
            new: true,
            useFindAndModify: false
        }).catch(error => {
            throw error;
        });
        return userUpdated;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async (idUser) => {
    try {
        await User.deleteOne({_id: idUser}).catch(error => {
            throw error;
        });
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getLastFeedbacks,
    getFeedbacksByRating,
    saveFeedback,
    updateFeedback,
    deleteFeedback,
    getFeedbacks,
    saveOder,
    updateOrder,
    deleteOrder,
    getOrders,
    saveUser, 
    updateUser,
    deleteUser,
    getUsers
}
