const express = require("express");

const router = express.Router();

const CourseDb = require("../models/CourseDb");

router.get("/", (req, res) => {

    CourseDb.find({  })
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", daerrorta);
        });
});

router.post("/save", (req, res) => {
    const data = req.body;

    const newCourseDb = new CourseDb(data);

    newCourseDb.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Sorry, internal server errors" });
            return;
        }
        // CourseDb
        return res.json({
            msg: "Your data has been saved!"
        });
    });
});

module.exports = router;