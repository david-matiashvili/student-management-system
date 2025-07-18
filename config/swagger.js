import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import dotenv from 'dotenv';
dotenv.config();


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Student Management API',
            version: '1.0.0',
            description: 'API for managing students, courses, enrollments, grades, and attendance',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`, // match your app base path
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter JWT token like: Bearer <token>',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'], // your routes with swagger annotations
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
