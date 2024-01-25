import path from 'path';
import { SwaggerOptions } from 'swagger-ui-express';

const swaggerOptions: SwaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Food delivery code test',
      version: '1.0.0',
      description: 'Food delivery code test API',
    },
  },
  apis: [
    path.resolve(__dirname, './docs/schemas.yaml'),
    path.resolve(__dirname, './docs/restaurants.yaml'),
    path.resolve(__dirname, './docs/filters.yaml'),
    path.resolve(__dirname, './docs/open.yaml'),
    path.resolve(__dirname, './docs/price_range.yaml'),
  ],
};

export default swaggerOptions;
