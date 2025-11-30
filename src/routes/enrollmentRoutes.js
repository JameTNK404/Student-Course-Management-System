const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/', enrollmentController.enrollStudent);
router.get('/student/:student_id', enrollmentController.getStudentCourses);

module.exports = router;
