import express from "express";
import {
    getAllAttendance,
    getAttendanceByEnrollment,
    createAttendance,
} from '../controllers/attendanceController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Attendance
 *   description: Track student attendance by session
 */

/**
 * @swagger
 * /api/attendance:
 *   get:
 *     summary: Get all attendance records
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all attendance records
 */
router.get('/', getAllAttendance);

/**
 * @swagger
 * /api/attendance/{enrollment_id}:
 *   get:
 *     summary: Get attendance for an enrollment
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: enrollment_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Attendance entries
 */
router.get('/:enrollment_id', getAttendanceByEnrollment);

/**
 * @swagger
 * /api/attendance:
 *   post:
 *     summary: Record attendance for a session
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - enrollment_id
 *               - session_date
 *               - status
 *             properties:
 *               enrollment_id:
 *                 type: string
 *               session_date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [present, absent, late]
 *     responses:
 *       201:
 *         description: Attendance saved
 */
router.post('/', createAttendance);

export default router;
