const moongose = require("mongoose");
const Schema = moongose.Schema;

const ordersSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    groceries: {
        type: Array,
        required: true
    },
    orderDate: {
        type: Date,
        default: new Date()
    },
    feedback: {
        rate: {
            type: Number
        },
        review: {
            type: String
        }
    }
});

module.exports = moongose.model("Orders", ordersSchema);