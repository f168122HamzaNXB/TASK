let Student = require("../model/studentModel");

exports.index = (req, res, next) => {
    try{
        console.log("Index ma agya");
        Student.find({}, function(err, students){
            console.log("------------------------");
            res.json({
                data: students
            });
        });
    } 
    catch(error){
        res.status(500).json({error: error})
    }
}

exports.create = (req, res, next) => {
    const { firstname, lastname, designation, city, country } = req.body;
    console.log("create ma agya");
    var student = new Student();
    student.firstname = firstname;
    student.lastname = lastname;
    student.designation = designation;
    student.city = city;
    student.country = country;

    console.log("firstname", firstname);

    student.save(function (err){
        res.json({
            message: "New student created!",
            student: student.firstname
        });
    });
}

exports.getStudentById = function (req, res, next){
    Student.findOne({_id: req.params.student_id}, function(err, student){
        res.json({
            data: student
        });
    });
};

exports.update = function (req, res){
    const { firstname, lastname, designation, city, country } = req.body;
    Student.findOne({_id: req.params.student_id}, function(err, student){
        if (err)
            res.send(err)
        student.firstname = firstname;
        student.lastname = lastname;
        student.designation = designation;
        student.city = city;
        student.country = country;
        console.log(student.firstname);
        console.log(student.lastname);
        student.save(function (err) {
            if (err){
                res.json(err);
            } else {
                res.json({
                    message: 'Student Info updated',
                    data: student
                });
            }
        });
    });
};

//Delete => delete the student
exports.delete = function (req, res) {
    Student.remove({
        _id: req.params.student_id
    }, function (err, student) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted',
            data: student
        });
    });
};


