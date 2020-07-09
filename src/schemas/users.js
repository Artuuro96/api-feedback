const moongose = require("mongoose");
const Schema = moongose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        unique: true, 
        required: true
    }
});

module.exports = moongose.model("Users", usersSchema);
