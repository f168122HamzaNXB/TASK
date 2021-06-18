const express = require("express");
const router = express.Router();
const studentController = require('../controller/studentController');

router.get("/students", studentController.index);
router.post("/createstudents", studentController.create);
router.get("/student/:student_id", studentController.getStudentById);
router.patch("/student/:student_id", studentController.update);
router.delete("/delete/:student_id", studentController.delete);

module.exports =  router;