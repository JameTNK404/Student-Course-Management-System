const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *       properties:
 *         student_id:
 *           type: integer
 *           description: Auto-generated student ID
 *         first_name:
 *           type: string
 *           description: Student's first name
 *         last_name:
 *           type: string
 *           description: Student's last name
 *         email:
 *           type: string
 *           format: email
 *           description: Student's email address
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: Student's date of birth
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Timestamp when student was created
 *       example:
 *         student_id: 1
 *         first_name: John
 *         last_name: Doe
 *         email: john.doe@example.com
 *         date_of_birth: 2000-01-15
 *         created_at: 2024-01-01T00:00:00.000Z
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     description: Retrieve a list of all students in the system
 *     responses:
 *       200:
 *         description: List of students retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Server error
 */
router.get('/', studentController.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     description: Retrieve a specific student by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.get('/:id', studentController.getStudentById);

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     description: Add a new student to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - email
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *             example:
 *               first_name: Jane
 *               last_name: Smith
 *               email: jane.smith@example.com
 *               date_of_birth: 2001-05-20
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', studentController.createStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update student
 *     tags: [Students]
 *     description: Update an existing student's information
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *             example:
 *               first_name: John
 *               last_name: Doe
 *               email: john.updated@example.com
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.put('/:id', studentController.updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete student
 *     tags: [Students]
 *     description: Remove a student from the system
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', studentController.deleteStudent);

module.exports = router;

