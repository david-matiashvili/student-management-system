import express from "express";
import {
    getAllGrades,
    getGradesByEnrollment,
    createGrade,
} from '../controllers/gradeController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Grades
 *   description: Grade tracking per enrollment
 */

/**
 * @swagger
 * /api/grades:
 *   get:
 *     summary: Get all grades
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: List of all grades
 */
router.get('/', getAllGrades);

/**
 * @swagger
 * /api/grades/{enrollment_id}:
 *   get:
 *     summary: Get grades by enrollment ID
 *     tags: [Grades]
 *     parameters:
 *       - in: path
 *         name: enrollment_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Grades for enrollment
 */
router.get('/:enrollment_id', getGradesByEnrollment);

/**
 * @swagger
 * /api/grades:
 *   post:
 *     summary: Assign a grade to a student
 *     tags: [Grades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - enrollment_id
 *               - grade
 *             properties:
 *               enrollment_id:
 *                 type: string
 *               grade:
 *                 type: number
 *     responses:
 *       201:
 *         description: Grade recorded
 */
router.post('/', createGrade);

export default router;
