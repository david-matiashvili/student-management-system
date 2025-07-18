import { pool } from '../config/db.js';

export const GradeModel = {
    getAll: () => pool.query('SELECT * FROM grades'),
    getByEnrollment: (enrollment_id) =>
        pool.query('SELECT * FROM grades WHERE enrollment_id = $1', [enrollment_id]),
    create: (enrollment_id, grade) =>
        pool.query(
            'INSERT INTO grades (enrollment_id, grade) VALUES ($1, $2) RETURNING *',
            [enrollment_id, grade]
        ),
};
