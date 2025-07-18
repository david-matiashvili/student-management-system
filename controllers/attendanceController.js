import { AttendanceModel } from '../models/attendanceModel.js';

export const getAllAttendance = async (req, res) => {
    try {
        const { rows } = await AttendanceModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAttendanceByEnrollment = async (req, res) => {
    try {
        const { enrollment_id } = req.params;
        const { rows } = await AttendanceModel.getByEnrollment(enrollment_id);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createAttendance = async (req, res) => {
    try {
        const { enrollment_id, session_date, status } = req.body;
        const { rows } = await AttendanceModel.create(enrollment_id, session_date, status);
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
