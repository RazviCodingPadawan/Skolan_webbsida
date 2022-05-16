const ApplicationModel = require('../models/ApplicationModel');

module.exports.getApplication = async (req, res) => {
    const Apply = await ApplicationModel.find();
    res.send(Apply);
}

module.exports.addApplication = async (req, res) => {
    const {addApplication} = { 
        courses: req.body.courses,
    
        firstName: req.body.firstName,
    
        secondName: req.body.secondName,
    
        email: req.body.email,
    
        message: req.body.message,
    
        agree: req.body.agree,
     }
     ApplicationModel
     .findByIdAndUpdate(_id, {addApplication})
     .then(() => res.set(201).send('Application added successfully'))
     .catch((err) => console.log(err))
}


module.exports.deleteApplication = (req, res) => {
    const {_id} = req.params.id;

    ApplicationModel
    .findByIdAndDelete({_id})
    .then(() => res.set(201).send('Application deleted successfully'))
    .catch((err) => console.log(err))

}

module.exports.updateApplication = (req, res) => {
    const {_id, courses, firstName, secondName, email, message} = req.body;

    ApplicationModel
    .findByIdAndUpdate({_id}, {courses}, {firstName}, {secondName}, {email}, {message})
    .then(() => res.set(201).send('Application updated successfully'))
    .catch((err) => console.log(err))

}