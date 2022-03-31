const mongoose = require("mongoose");


// Schema
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

// Model
const CourseDb = mongoose.model("CourseDb", CourseDbSchema);

module.exports =  CourseDb;