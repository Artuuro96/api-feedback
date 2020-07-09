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
    feedback: {
        type: String,
        required: true
    }
});

module.exports = moongose.model("Users", odersSchema);