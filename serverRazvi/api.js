const express = require('express')
const path = require('path')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1/Educations")
const educationsSchema = new mongoose.Schema ({
    name: '',
    teacher: '',
    description: '',
    classes: '',
})
var education = mongoose.model("Education", educationsSchema)

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html')); //../jensen_skolan_reactjs/src/pages/EducationsForm.js
});

app.post("/add", (req, res) => {
    var myData = new education(req.body);
    myData.save().then(item => {
        res.send("Name saved to database");
    }).catch(err => {
        res.status(400).send("Unable to save to database");
    });
});

app.post('/update', (req, res) => {
    console.log(req.body)
    const filter = {name: req.body.oldName}
    const entry = education.findOneAndUpdate(filter, {
        name: req.body.education.name,
        teacher: req.body.education.teacher,
        description: req.body.education.description,
        classes: req.body.education.classes,
    }, { new: true }).then(item => {
        res.send("Name updated to database");
    }).catch(err => {
        res.status(400).send("Unable to save to database");
    }); 
})

app.post('/delete', (req, res) => {
    console.log(req.body)
    const filter = {name: req.body.name}
    education.findOneAndDelete(filter).then(item => {
        res.send("Name deleted from database");
    }).catch(err => {
        res.status(400).send("Unable to save to database");
    });
})

app.get('/showAll', (req, res) => {
    education.find({}).then(function(educations) {
        res.send(educations)
    })
})

app.listen(port, () => {
    console.log("Server started at port " + port)
})