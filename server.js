const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');

const routes = require('./src/routes');

const swaggerDocs = require('./src/swagger.json');

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));

const HTTP_OK_STATUS = 200;
// eslint-disable-next-line no-undef

app.use(routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

module.exports = app;
