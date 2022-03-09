const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const routes = require('./src/routes');

const app = express();
app.use(bodyParser.json());

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
