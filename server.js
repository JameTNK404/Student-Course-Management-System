const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Student Course Management System API',
}));

// Routes (to be imported)
const studentRoutes = require('./src/routes/studentRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const enrollmentRoutes = require('./src/routes/enrollmentRoutes');

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
