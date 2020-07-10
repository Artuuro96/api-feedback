const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { createFeedback, readFeedback, updateFeedback, deleteFeedback} = require("./controllers/feedbacks");
const { createOrder, readOrders, upateOrder, deleteOrder } = require("./controllers/orders");
const { createUser, updateUser, deleteUser, readUsers} = require("./controllers/users");
const constants = require("./util/constants");
const dotenv = require("dotenv");
const mongo = require("./util/mongo");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.route(constants.FEEDBACK_PATH + "/:idOrder").post(createFeedback);
app.route(constants.FEEDBACK_PATH + "/:idOrder").put(updateFeedback);
app.route(constants.FEEDBACK_PATH + "/:idOrder").delete(deleteFeedback);
app.route(constants.FEEDBACK_PATH + "/:idOrder").get(readFeedback);
app.route(constants.FEEDBACK_PATH).get(readFeedback);

app.route(constants.ORDERS_PATH).post(createOrder);
app.route(constants.ORDERS_PATH + "/:idOrder").put(upateOrder);
app.route(constants.ORDERS_PATH + "/:idOrder").delete(deleteOrder);
app.route(constants.ORDERS_PATH + "/:idOrder").get(readOrders);
app.route(constants.ORDERS_PATH).get(readOrders);
    
app.route(constants.USERS_PATH).post(createUser)
app.route(constants.USERS_PATH + "/:idUser").put(updateUser);
app.route(constants.USERS_PATH + "/:idUser").delete(deleteUser);
app.route(constants.USERS_PATH + "/:idUser").get(readUsers);
app.route(constants.USERS_PATH).get(readUsers);
    
mongo.connect()
    .then(res => {
        console.log("Mongoose connected to: " + process.env.MONGODB_URI)
    })
    .catch(error => {
        console.error("Connection to MongoDB has failed: ", error)
    }) 

app.listen(process.env.PORT, (error) => {
    if(error) {
        console.error(error);
        process.exit(0);
    }
    console.log("");                                
    console.log(" ============================================= ")
    console.log("                 API FEEDBACKS                 ")
    console.log("  ")
    console.log(" ============================================= ")
    console.log("")
    console.log("Nodejs server running on port: ", process.env.PORT)
});

