import { CourseModel } from '../models/courseModel.js';

export const getAllCourses = async (req, res) => {
    try {
        const { rows } = await CourseModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await CourseModel.getById(id);
        if (!rows.length) return res.status(404).json({ message: 'Course not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createCourse = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { rows } = await CourseModel.create(title, description);
        res.status(201).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await CourseModel.update(id, title, description);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await CourseModel.delete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
