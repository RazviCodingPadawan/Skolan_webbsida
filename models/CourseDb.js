const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CourseDbSchema = new Schema({
    courseName: String,
    courseId: String,
    startDate: String,
    placeDistance: String,
    educator: String,
    date: {
        type: String,
        default: Date.now()
    }
});

const CourseDb = mongoose.model("CourseDb", CourseDbSchema);

module.exports =  CourseDb;