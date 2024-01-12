const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EstateSymphony',
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsdoc(options);

const swaggerUiOptions = {
    // explorer: true,  // assurez-vous que cette option est vraie
    defaultModelsExpandDepth: -1, // assurez-vous que cette option est -1
    // docExpansion: 'list',
};

module.exports = { specs, swaggerUi, swaggerUiOptions };

