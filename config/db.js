// Pool
import pkg from 'pg';
const { Pool } = pkg;
// Dotenv
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PASS, // change if needed
    port: process.env.DB_PORT,
});

// Test the connection
pool.connect()
.then(() => {
    console.log('✅ Connected to PostgreSQL database successfully.');
})
.catch((err) => {
    console.error('❌ Failed to connect to PostgreSQL:', err.message);
    process.exit(1); // Optional: Stop the app if DB connection fails
});