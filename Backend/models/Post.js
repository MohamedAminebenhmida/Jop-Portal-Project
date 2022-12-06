const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    offeredSalary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    localisation: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});
module.exports = mongoose.model("Post", postSchema);