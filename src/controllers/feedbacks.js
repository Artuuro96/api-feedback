const saveFeedback = require("../services/feedback/saveFeedback");

const createFeedback = async (req, res) => {
    try {
        return res.status(201).jsonp(
            await saveFeedback(req)
        );
    } catch (error) {
        throw error;
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