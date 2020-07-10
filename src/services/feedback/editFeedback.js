const mongoRepository = require("../../repository/mongodb");
const httpStatus = require("../../util/httpStatus");
const { BadRequestError } = require("../../errors/Exception");

module.exports = updateFeedback = async (req, res) => {
    try {
        const { idOrder } = req.params;
        const { userid } = req.headers;
        
        const order = await mongoRepository.getOrders(idOrder).catch(error => {
            throw error;
        })

        if(!order || order.length == 0) throw new BadRequestError("idOrder does not exist");

        const user = await mongoRepository.getUsers(userid).catch(error => {
            throw error;
        })

        if(!user || user.length == 0) throw new BadRequestError("userId does not exist");

        const payload = await mongoRepository.updateFeedback(req.body, idOrder, userid).catch(error => {
            throw error;
        });

        if(!payload){
            throw new Error("Order has not been created");
        }

        return res.status(httpStatus.CREATED).jsonp(payload);
    } catch (error) {
        console.error(error);
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