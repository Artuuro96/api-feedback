const httpStatus = require("../../util/httpStatus");
const mongoRepository = require("../../repository/mongodb");

module.exports = getUsers = async(req, res) => {
    try {
        const { idUser } = req.params;
        const payload = await mongoRepository.getUsers(idUser).catch(error => {
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