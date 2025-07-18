import express from "express";
import {
    getStudentPerformance,
} from '../controllers/performanceController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Performance
 *   description: Student GPA and attendance performance
 */

/**
 * @swagger
 * /api/students/{id}/performance:
 *   get:
 *     summary: Get a student's GPA and attendance record
 *     tags: [Performance]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Performance data
 *       404:
 *         description: Not found
 */
router.get('/:id/performance', getStudentPerformance);

export default router;
