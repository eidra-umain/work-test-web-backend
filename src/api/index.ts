import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../swagger/swaggerOptions';
import routes from '../routes/routes';

const app = express();

app.use(express.static('public'));

app.use('/api', routes);

const getBaseUrl = (req: any) => {
  const proto = req.get('X-Forwarded-Proto') || req.protocol;
  const host = req.get('X-Forwarded-Host') || req.get('host');
  return `${proto}://${host}`;
};

app.use('/api-docs', (req, res, next) => {
  // Set the server URL dynamically
  swaggerOptions.swaggerDefinition.servers = [
    { url: `${getBaseUrl(req)}/api` },
  ];

  // Setup Swagger middleware
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  next();
});

export default app;
