const httpStatus = require("../../util/httpStatus");
const mongoRepository = require("../../repository/mongodb");
const { BadRequestError } = require("../../errors/Exception");

module.exports = deleteOrder = async (req, res) => {
    try {
        const { idOrder, idUser } = req.params;
        const order = await mongoRepository.getOrders(idOrder).catch(error => {
            throw error;
        })

        if(!order || order.length == 0) throw new BadRequestError("idOrder does not exist");

        const user = await mongoRepository.getUsers(idUser).catch(error => {
            throw error;
        })

        if(!user || user.length == 0) throw new BadRequestError("userId does not exist");

        await mongoRepository.deleteOrder(idOrder, idUser).catch(error => {
            throw error;
        });

        return res.status(httpStatus.NO_CONTENT).json({});
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