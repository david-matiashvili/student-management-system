import { pool } from '../config/db.js';

export const UserModel = {
    create: (name, email, hashedPassword) =>
        pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        ),
    findByEmail: (email) =>
        pool.query('SELECT * FROM users WHERE email = $1', [email]),
};
