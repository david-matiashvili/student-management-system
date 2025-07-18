import { GradeModel } from '../models/gradeModel.js';

export const getAllGrades = async (req, res) => {
    try {
        const { rows } = await GradeModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getGradesByEnrollment = async (req, res) => {
    try {
        const { enrollment_id } = req.params;
        const { rows } = await GradeModel.getByEnrollment(enrollment_id);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createGrade = async (req, res) => {
    try {
        const { enrollment_id, grade } = req.body;
        const { rows } = await GradeModel.create(enrollment_id, grade);
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
