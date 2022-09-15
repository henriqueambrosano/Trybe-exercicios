// src/server.js

require('dotenv').config();
const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});