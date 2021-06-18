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

});

module.exports = Student = mongoose.model("Student", studentSchema);