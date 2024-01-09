const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EstateSymphony',
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsdoc(options);

module.exports = {specs, swaggerUi};