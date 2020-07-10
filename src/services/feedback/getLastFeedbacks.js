const mongoRepository = require("../../repository/mongodb");
const httpStatus = require("../../util/httpStatus");
const { BadRequestError } = require("../../errors/Exception");

module.exports = getLastFeedbacks = async (req, res) => {
    try {
        const payload = await mongoRepository.getLastFeedbacks().catch(error => {
            throw error;
        });
        console.log(payload)
        return res.status(httpStatus.OK).jsonp(payload);
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