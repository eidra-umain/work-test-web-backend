import path from 'path';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Food delivery code test',
      version: '1.0.0',
      description: 'Food delivery code test API',
    },
    servers: [
      {
        url: process.env.VERCEL_URL || 'http://localhost:3000',
        description: 'Vercel Server',
      },
    ],
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