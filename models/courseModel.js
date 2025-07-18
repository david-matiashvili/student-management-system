import { pool } from '../config/db.js';


export const CourseModel = {
    getAll: () => pool.query('SELECT * FROM courses'),
    getById: (id) => pool.query('SELECT * FROM courses WHERE id = $1', [id]),
    create: (title, description) =>
        pool.query('INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *', [title, description]),
    update: (id, title, description) =>
        pool.query('UPDATE courses SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]),
    delete: (id) => pool.query('DELETE FROM courses WHERE id = $1', [id]),
};