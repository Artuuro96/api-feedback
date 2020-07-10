const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { createFeedback, updateFeedback, deleteFeedback, getByRating,  getLasts} = require("./controllers/feedbacks");
const { createOrder, readOrders, upateOrder, deleteOrder } = require("./controllers/orders");
const { createUser, updateUser, deleteUser, readUsers} = require("./controllers/users");
const constants = require("./util/constants");
const dotenv = require("dotenv");
const mongo = require("./util/mongo");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.route(constants.FEEDBACK_PATH + "/create/:idOrder").post(createFeedback);
app.route(constants.FEEDBACK_PATH + "/update/:idOrder").put(updateFeedback);
app.route(constants.FEEDBACK_PATH + "/delete/:idOrder").delete(deleteFeedback);
app.route(constants.FEEDBACK_PATH + "/get/:idOrder").get(readOrders);
app.route(constants.FEEDBACK_PATH + "/getLasts").get(getLasts);
app.route(constants.FEEDBACK_PATH + "/get/rating/:rating").get(getByRating);
app.route(constants.FEEDBACK_PATH + "/get").get(readOrders);

app.route(constants.ORDERS_PATH + "/create").post(createOrder);
app.route(constants.ORDERS_PATH + "/update/:idOrder").put(upateOrder);
app.route(constants.ORDERS_PATH + "/delete/:idOrder/:idUser").delete(deleteOrder);
app.route(constants.ORDERS_PATH + "/get/:idOrder").get(readOrders);
app.route(constants.ORDERS_PATH + "/get").get(readOrders);
    
app.route(constants.USERS_PATH + "/create").post(createUser)
app.route(constants.USERS_PATH + "/update/:idUser").put(updateUser);
app.route(constants.USERS_PATH + "/delete/:idUser").delete(deleteUser);
app.route(constants.USERS_PATH + "/get/:idUser").get(readUsers);
app.route(constants.USERS_PATH + "/get").get(readUsers);
    
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

