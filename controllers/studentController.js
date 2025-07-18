import { StudentModel } from '../models/studentModel.js';

export const getAllStudents = async (req, res) => {
    try {
        const { rows } = await StudentModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await StudentModel.getById(id);
        if (!rows.length) return res.status(404).json({ message: 'Student not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createStudent = async (req, res) => {
    try {
        const { name, email } = req.body;
        const { rows } = await StudentModel.create(name, email);
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        await StudentModel.update(id, name, email);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await StudentModel.delete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
