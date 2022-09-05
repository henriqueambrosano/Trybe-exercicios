require('dotenv').config();
const app = require('./app');
const connection = require('./db/connection');

app.listen(3001, async () => {
  console.log('running on port 3001')

  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});