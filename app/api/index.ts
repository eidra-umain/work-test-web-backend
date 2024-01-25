import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../src/swagger/swaggerOptions';
import routes from '../../src/routes/routes';

const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(express.static('public'));
}

app.use('/api', routes);

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
