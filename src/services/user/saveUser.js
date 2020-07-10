const httpStatus = require("../../util/httpStatus");
const mongoRepository = require("../../repository/mongodb");

module.exports = saveUser = async(req, res) => {
    try {
        const payload = await mongoRepository.saveUser(req.body).catch(error => {
            throw error;
        });

        if(!payload) {
            throw new Error("User has not been created");
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