const moongose = require("mongoose");
const Schema = moongose.Schema;

const groceriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Array,
        required: true
    }
});

module.exports = moongose.model("Users", groceriesSchema);