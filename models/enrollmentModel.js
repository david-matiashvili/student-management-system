import { pool } from '../config/db.js';

export const EnrollmentModel = {
    getAll: () => pool.query('SELECT * FROM enrollments'),
    getById: (id) => pool.query('SELECT * FROM enrollments WHERE id = $1', [id]),
    create: (student_id, course_id) =>
        pool.query(
            'INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2) RETURNING *',
            [student_id, course_id]
        ),
    delete: (id) => pool.query('DELETE FROM enrollments WHERE id = $1', [id]),
};
