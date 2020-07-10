const httpStatus = require("../../util/httpStatus");
const mongoRepository = require("../../repository/mongodb");
const { InternalServerError } = require("../../errors/Exception");

module.exports = updateUser = async(req, res) => {
    try {
        const { idUser } = req.params;
        const payload = await mongoRepository.updateUser(req.body, idUser).catch(error => {
            throw error;
        });
        if(!payload) {
            throw new InternalServerError("User has not been updated");
        }
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