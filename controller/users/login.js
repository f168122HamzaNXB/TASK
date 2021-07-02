let Student = require("../../model/studentModel");
const bcrypt = require('bcrypt');
const config = require("../../config.json");
const jwt = require('jsonwebtoken');
let token;

//Login => login the student
exports.login = ( req, res, next ) => {
    Student.findOne({email: req.body.email}, function(err, student){
        // const value = bcrypt.compareSync(req.body.password, student.hashPassword)
        console.log('login ma agya');
        console.log(req.body.email);
        if(student && bcrypt.compareSync(req.body.hashPassword, student.hashPassword)){
            
            token = jwt.sign({ sub: student.email }, config.secret, { expiresIn: '7d' });
            res.json({
                message: "Login Successfully",
                token: token
            });      
        }
    });
}