const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { createFeedback, readFeedback, updateFeedback, eliminateFeedback } = require("./controllers/feedbacks");
const { createOrder } = require("./controllers/orders");
const constants = require("./util/constants");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(constants.DOCS_PATH, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.route(constants.FEEDBACK_PATH)
    .get(readFeedback)
    .put(updateFeedback)
    .post(createFeedback)
    .delete(eliminateFeedback);

app.route(constants.ORDERS_PATH)
    .post(createOrder);


app.listen(80);
