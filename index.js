const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swagger = require('swagger-ui-express');

dotenv.config();

const routes = require('./src/routes');

const swaggerDocs = require('./src/swagger.json');

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));

const HTTP_OK_STATUS = 200;
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || '3000';

app.use(routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
