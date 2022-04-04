const express = require('express')
const path = require('path')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

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

app.put('/update', (req, res) => {

})

app.delete('/delete', (req, res) => {

})

app.listen(port, () => {
    console.log("Server started at port " + port)
})