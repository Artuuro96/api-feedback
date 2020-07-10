const mongoRepository = require("../../repository/mongodb");
const httpStatus = require("../../util/httpStatus");

module.exports = updateOrder = async (req, res) => {
    try {
        const { idOrder } = req.params;
        const payload = await mongoRepository.updateOrder(req.body, idOrder).catch(error => {
            throw error;
        });

        if(!payload){
            throw new Error("Order has not been created");
        }

        return res.status(httpStatus.CREATED).jsonp(payload);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).jsonp({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
        return res.status(error.status).jsonp({
            status: error.status,
            message: error.message
        });
    }
}