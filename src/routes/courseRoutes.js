const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - course_code
 *         - course_name
 *         - credits
 *       properties:
 *         course_id:
 *           type: integer
 *           description: Auto-generated course ID
 *         course_code:
 *           type: string
 *           description: Unique course code
 *         course_name:
 *           type: string
 *           description: Name of the course
 *         credits:
 *           type: integer
 *           description: Number of credits for the course
 *         description:
 *           type: string
 *           description: Course description
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp when course was created
 *       example:
 *         course_id: 1
 *         course_code: CS101
 *         course_name: Introduction to Computer Science
 *         credits: 3
 *         description: Basic concepts of computer science
 *         created_at: 2024-01-01T00:00:00.000Z
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     description: Retrieve a list of all courses in the system
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       500:
 *         description: Server error
 */
router.get('/', courseController.getAllCourses);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     description: Add a new course to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_code
 *               - course_name
 *               - credits
 *             properties:
 *               course_code:
 *                 type: string
 *               course_name:
 *                 type: string
 *               credits:
 *                 type: integer
 *               description:
 *                 type: string
 *             example:
 *               course_code: CS102
 *               course_name: Data Structures
 *               credits: 3
 *               description: Study of fundamental data structures
 *     responses:
 *       201:
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', courseController.createCourse);

module.exports = router;

