const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Next.js Documentation',
            version: '1.0.0',
            description: 'Documentation Swagger de l\'API',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./swagger/*.js'], // enlever le .ts puisque node ne lit pas typescript ici
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
