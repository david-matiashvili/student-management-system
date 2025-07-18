import { EnrollmentModel } from '../models/enrollmentModel.js';

export const getAllEnrollments = async (req, res) => {
    try {
        const { rows } = await EnrollmentModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getEnrollmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await EnrollmentModel.getById(id);
        if (!rows.length) return res.status(404).json({ message: 'Enrollment not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createEnrollment = async (req, res) => {
    try {
        const { student_id, course_id } = req.body;
        const { rows } = await EnrollmentModel.create(student_id, course_id);
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        await EnrollmentModel.delete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
