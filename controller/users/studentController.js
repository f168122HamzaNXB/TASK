let Student = require("../../model/studentModel");
const bcrypt = require('bcrypt');

//index => get all the student
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

//Create => create the new student
exports.create = (req, res, next) => {
    const { firstname, lastname, email, password, designation, city, country } = req.body;
    var student = new Student();
    student.firstname = firstname;
    student.lastname = lastname;
    student.email = email;
    if (password){
        student.hashPassword = bcrypt.hashSync(password, 10)
    }
    student.designation = designation;
    student.city = city;
    student.country = country;

    student.save(function (err){
        
        // var token = jwt.sign({ email: student.email }, config.secret, {
        //     expiresIn: 86400
        // });
        res.json({
            message: "New student created!",
            student: student.email,
            password: student.hashPassword,
            // token: token,
        });
    });
}

//getById => get the specific student
exports.getStudentById = function (req, res, next){
    Student.findOne({_id: req.params.student_id}, function(err, student){
        res.json({
            data: student
        });
    });
};

//Update => update the specific student
exports.update = function (req, res){
    const { firstname, lastname,  email, password, designation, city, country } = req.body;
    Student.findOne({_id: req.params.student_id}, function(err, student){
        if (err)
            res.send(err)
        student.firstname = firstname;
        student.lastname = lastname;
        student.designation = designation;
        student.email = email;
        if (password){
            student.hashPassword = bcrypt.hashSync(password, 10)
        }
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
        if (err){
            res.send(err);
        } else {
            res.json({
            status: "success",
            message: 'Contact deleted',
            data: student
        });
      }
    });
};


