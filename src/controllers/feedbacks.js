const saveFeedback = require("../services/feedback/saveFeedback");
const editFeedback = require("../services/feedback/editFeedback");
const eliminateFeedback = require("../services/feedback/eliminateFeedback");
const getFeedback = require("../services/feedback/getFeedback");
const getLastFeedbacks = require("../services/feedback/getLastFeedbacks");
const getByFeedbacksRating = require("../services/feedback/getFeedbacksByRating");

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

const getByRating = async (req, res) => {
    return await getByFeedbacksRating (req, res);
}

const getLasts = async (req, res) => {
    return await getLastFeedbacks (req, res);
}


module.exports = {
    createFeedback,
    readFeedback, 
    updateFeedback,
    deleteFeedback,
    getByRating,
    getLasts
};