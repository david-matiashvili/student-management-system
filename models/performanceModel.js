import { pool } from '../config/db.js';

export const PerformanceModel = {
    getPerformanceByStudentId: (student_id) =>
        pool.query(
            `
            SELECT
                s.id AS student_id,
                s.name,
                c.title AS course,
                ROUND(AVG(g.grade), 2) AS avg_grade,
                COUNT(a.*) FILTER (WHERE a.status = 'present') AS present_count,
                COUNT(a.*) FILTER (WHERE a.status = 'absent') AS absent_count,
                COUNT(a.*) FILTER (WHERE a.status = 'late') AS late_count
            FROM students s
            JOIN enrollments e ON e.student_id = s.id
            JOIN courses c ON c.id = e.course_id
            LEFT JOIN grades g ON g.enrollment_id = e.id
            LEFT JOIN attendance a ON a.enrollment_id = e.id
            WHERE s.id = $1
            GROUP BY s.id, s.name, c.title
        `,
            [student_id]
        ),
};
