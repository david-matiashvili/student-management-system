import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Swagger
import { swaggerUi, specs } from './config/swagger.js';

// Routes
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import gradeRoutes from "./routes/gradeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import performanceRoutes from "./routes/performanceRoutes.js";

// Auth
import authRoutes from './routes/authRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Auth Route
app.use('/auth', authRoutes);

// Dynamically protect all other routes under /api
const protectedRoutes = express.Router();
protectedRoutes.use(authenticateToken);

// Attach routes to protectedRoutes
protectedRoutes.use("/students", studentRoutes);
protectedRoutes.use("/courses", courseRoutes);
protectedRoutes.use("/enrollments", enrollmentRoutes);
protectedRoutes.use("/grades", gradeRoutes);
protectedRoutes.use("/attendance", attendanceRoutes);
protectedRoutes.use("/students", performanceRoutes); // /students/:id/performance

// Mount protected routes under /api
app.use('/api', protectedRoutes);
app.listen(PORT, () => {
    console.log(`Student service running on port ${PORT}`);
});