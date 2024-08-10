const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'JMR Exam API',
      version: '1.0.0',
      description: 'API documentation for JMR Exam System'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] // Paths to the API docs
};

module.exports = swaggerOptions;
