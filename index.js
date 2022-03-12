const dotenv = require('dotenv');
const app = require('./server');

dotenv.config();

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});