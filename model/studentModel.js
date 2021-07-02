const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = Schema({

    firstname:{
        type: String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    hashPassword:{
        type: String,
        required: true,
    },

    designation:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    country:{
        type: String,
        required: true,
    },

    token:{
        type: String,
    },

});

module.exports = Student = mongoose.model("Student", studentSchema);