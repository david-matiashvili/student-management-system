# Student Management System API

A Node.js-based RESTful API for managing students, courses, enrollments, grades, and attendance with JWT authentication and Swagger documentation.

---

## \:hammer\_and\_wrench: Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL
* **Authentication:** JWT
* **Documentation:** Swagger (OpenAPI 3)
* **Environment Management:** dotenv

---

## \:rocket: Features

* **Students CRUD**: Create, read, update, and delete student records
* **Courses CRUD**: Manage courses
* **Enrollments**: Assign students to courses
* **Grades**: Assign grades to students per course
* **Attendance**: Track student attendance per course session
* **Performance Endpoint**: Calculate and retrieve GPA and performance stats per student
* **Authentication**: JWT-based register and login endpoints
* **Swagger UI**: Explore all routes via `/api-docs`

---

## \:file\_folder: Project Structure

```
├── config
│   └── db.js
│   └── swagger.js
├── controllers
│   ├── studentController.js
│   ├── courseController.js
│   ├── enrollmentController.js
│   ├── gradeController.js
│   ├── attendanceController.js
│   ├── performanceController.js
│   └── authController.js
├── models
│   ├── studentModel.js
│   ├── courseModel.js
│   ├── enrollmentModel.js
│   ├── gradeModel.js
│   ├── attendanceModel.js
│   └── userModel.js
├── routes
│   ├── studentRoutes.js
│   ├── courseRoutes.js
│   ├── enrollmentRoutes.js
│   ├── gradeRoutes.js
│   ├── attendanceRoutes.js
│   ├── performanceRoutes.js
│   └── authRoutes.js
├── middleware
│   └── authMiddleware.js
├── .env
├── package.json
└── server.js
```

---

## \:lock: Authentication

JWT tokens are required for all routes except:

* `POST /auth/register`
* `POST /auth/login`

Use the token in the `Authorization` header:

```
Authorization: Bearer <your_token>
```

---

## \:blue\_book: API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

All routes are fully documented including authentication and request/response schemas.

---

## \:gear: Getting Started

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Configure `.env` file

```
PORT=5000
DB_USER=your_pg_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_pg_password
DB_PORT=5432
JWT_SECRET=your_jwt_secret
```

4. Run the server

```bash
npm start
```

---

## \:globe\_with\_meridians: License

MIT License

---

## \:handshake: Contribution

Pull requests are welcome! For major changes, please open an issue first.

---

## \:mailbox: Contact

Created by **David Tyash**. Feel free to reach out for collaboration or feedback!
