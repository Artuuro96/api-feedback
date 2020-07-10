const saveFeedback = require("../services/feedback/saveFeedback");

const createFeedback = async (req, res) => {
    try {
        const payload = await saveFeedback(req.body).catch(error => {
            throw error;
        });
        return res.status(payload.status).jsonp(payload);
    } catch (error) {
        console.error(error);
        if(error instanceof Error) {
            return res.status(500).jsonp({
                status: 500,
                message: error.message
            })
        }
        return res.status(error.status).jsonp({
            status: error.status,
            message: error.message
        });
    }
}

const readFeedback = async (req, res) => {
    //return await readFeedbacks(req, res);
}

const updateFeedback = async (req, res) => {
    //return await updateFeedback(req, res);
}

const eliminateFeedback = async (req, res) => {
    //return await eliminateFeedback(res, res);
}


module.exports = {
    createFeedback,
    readFeedback, 
    updateFeedback,
    eliminateFeedback
};