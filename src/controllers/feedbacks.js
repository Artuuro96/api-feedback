const saveFeedback = require("../services/feedback/saveFeedback");
const editFeedback = require("../services/feedback/editFeedback");
const eliminateFeedback = require("../services/feedback/eliminateFeedback");
const getFeedback = require("../services/feedback/getFeedback");

const createFeedback = async (req, res) => {
    return await editFeedback(req, res);
}

const readFeedback = async (req, res) => {
    return await getFeedback(req, res);
}

const updateFeedback = async (req, res) => {
    return await editFeedback(req, res);
}

const deleteFeedback = async (req, res) => {
    return await eliminateFeedback(req, res)
}


module.exports = {
    createFeedback,
    readFeedback, 
    updateFeedback,
    deleteFeedback
};