const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`🚀 Swagger UI is running at http://localhost:${PORT}/api-docs`);
});
