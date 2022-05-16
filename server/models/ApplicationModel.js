const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema ({
    courses: {
        type: String,
        enum: ['courseTitle', 'userName', 'userLastname', 'userEpost', 'text'],
        required : true 
    },

    firstName: {
        type: String, 
        required: true
    },

    secondName: {
        type: String, 
        required: true
    },

    email: {
        type: String, 
        required: true
    },

    message: {
        type: String, 
        required: true
    },

    agree: {
        required: false
    }
})

module.exports = mongoose.model("Apply", applicationSchema)