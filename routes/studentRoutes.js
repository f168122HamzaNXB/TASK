const express = require("express");
const router = express.Router();
const studentController = require('../controller/users/studentController');
const Login = require('../controller/users/login');

router.post("/login", Login.login);
router.get("/students", studentController.index);
router.post("/createstudents", studentController.create);
router.get("/student/:student_id", studentController.getStudentById);
router.patch("/student/:student_id", studentController.update);
router.delete("/delete/:student_id", studentController.delete);

module.exports =  router;