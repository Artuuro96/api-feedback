const httpStatus = require("../../util/httpStatus");
const mongoRepository = require("../../repository/mongodb");

module.exports = getOrders = async(req, res) => {
    try {
        const { idOrder } = req.params;
        const payload = await mongoRepository.getOrders(idOrder).catch(error => {
            throw error;
        });
        return res.status(httpStatus.OK).jsonp(payload);
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