import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../swagger/swaggerOptions';
import routes from '../routes/routes';

const app = express();

app.use(express.static('public'));

app.use('/api', routes);

// Function to get the base URL
const getBaseUrl = (req: any) => `${req.protocol}://${req.get('host')}/api`;

app.use('/api-docs', (req, res, next) => {
  // Set the server URL dynamically
  swaggerOptions.swaggerDefinition.servers = [{ url: getBaseUrl(req) }];

  // Setup Swagger middleware
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  next();
});

export default app;
