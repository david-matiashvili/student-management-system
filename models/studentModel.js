import { pool } from '../config/db.js';

export const StudentModel = {
    getAll: () => pool.query('SELECT * FROM students'),
    getById: (id) => pool.query('SELECT * FROM students WHERE id = $1', [id]),
    create: (name, email) =>
        pool.query('INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *', [name, email]),
    update: (id, name, email) =>
        pool.query('UPDATE students SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]),
    delete: (id) => pool.query('DELETE FROM students WHERE id = $1', [id]),
};