import express from "express";
import {
    getAllEnrollments,
    getEnrollmentById,
    createEnrollment,
    deleteEnrollment,
} from '../controllers/enrollmentController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Enrollments
 *   description: Student enrollments
 */

/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Get all enrollments
 *     tags: [Enrollments]
 *     responses:
 *       200:
 *         description: List of enrollments
 */
router.get('/', getAllEnrollments);

/**
 * @swagger
 * /api/enrollments/{id}:
 *   get:
 *     summary: Get enrollment by ID
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enrollment found
 *       404:
 *         description: Enrollment not found
 */
router.get('/:id', getEnrollmentById);

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll a student in a course
 *     tags: [Enrollments]
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
 *                 type: string
 *               course_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Enrollment created
 */
router.post('/', createEnrollment);

/**
 * @swagger
 * /api/enrollments/{id}:
 *   delete:
 *     summary: Remove a student's enrollment
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Enrollment deleted
 */
router.delete('/:id', deleteEnrollment);

export default router;
