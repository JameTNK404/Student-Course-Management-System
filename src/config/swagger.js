const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Course Management System API',
      version: '1.0.0',
      description: 'API documentation for Student Course Management System',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    tags: [
      {
        name: 'Students',
        description: 'Student management endpoints',
      },
      {
        name: 'Courses',
        description: 'Course management endpoints',
      },
      {
        name: 'Enrollments',
        description: 'Enrollment management endpoints',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
