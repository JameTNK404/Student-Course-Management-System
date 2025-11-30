const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Enrollment:
 *       type: object
 *       required:
 *         - student_id
 *         - course_id
 *       properties:
 *         enrollment_id:
 *           type: integer
 *           description: Auto-generated enrollment ID
 *         student_id:
 *           type: integer
 *           description: ID of the student
 *         course_id:
 *           type: integer
 *           description: ID of the course
 *         enrollment_date:
 *           type: string
 *           format: date-time
 *           description: Date when enrollment was created
 *         grade:
 *           type: string
 *           description: Grade received (optional)
 *       example:
 *         enrollment_id: 1
 *         student_id: 1
 *         course_id: 1
 *         enrollment_date: 2024-01-15T00:00:00.000Z
 *         grade: A
 *     StudentCourse:
 *       type: object
 *       properties:
 *         enrollment_id:
 *           type: integer
 *         student_id:
 *           type: integer
 *         course_id:
 *           type: integer
 *         enrollment_date:
 *           type: string
 *           format: date-time
 *         grade:
 *           type: string
 *         course_code:
 *           type: string
 *         course_name:
 *           type: string
 *         credits:
 *           type: integer
 *         description:
 *           type: string
 *       example:
 *         enrollment_id: 1
 *         student_id: 1
 *         course_id: 1
 *         enrollment_date: 2024-01-15T00:00:00.000Z
 *         grade: A
 *         course_code: CS101
 *         course_name: Introduction to Computer Science
 *         credits: 3
 *         description: Basic concepts of computer science
 */

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll a student in a course
 *     tags: [Enrollments]
 *     description: Create a new enrollment record for a student in a specific course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_id
 *               - course_id
 *             properties:
 *               student_id:
 *                 type: integer
 *                 description: ID of the student to enroll
 *               course_id:
 *                 type: integer
 *                 description: ID of the course
 *               grade:
 *                 type: string
 *                 description: Grade (optional)
 *             example:
 *               student_id: 1
 *               course_id: 1
 *     responses:
 *       201:
 *         description: Student enrolled successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Enrollment'
 *       400:
 *         description: Invalid input or student already enrolled
 *       500:
 *         description: Server error
 */
router.post('/', enrollmentController.enrollStudent);

/**
 * @swagger
 * /api/enrollments/student/{student_id}:
 *   get:
 *     summary: Get all courses for a student
 *     tags: [Enrollments]
 *     description: Retrieve all courses that a specific student is enrolled in
 *     parameters:
 *       - in: path
 *         name: student_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentCourse'
 *       404:
 *         description: Student not found or no enrollments
 *       500:
 *         description: Server error
 */
router.get('/student/:student_id', enrollmentController.getStudentCourses);

module.exports = router;

