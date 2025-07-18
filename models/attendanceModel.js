import { pool } from '../config/db.js';

export const AttendanceModel = {
    getAll: () => pool.query('SELECT * FROM attendance'),
    getByEnrollment: (enrollment_id) =>
        pool.query('SELECT * FROM attendance WHERE enrollment_id = $1', [enrollment_id]),
    create: (enrollment_id, session_date, status) =>
        pool.query(
            'INSERT INTO attendance (enrollment_id, session_date, status) VALUES ($1, $2, $3) RETURNING *',
            [enrollment_id, session_date, status]
        ),
};
