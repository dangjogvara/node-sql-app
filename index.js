const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/students', db.getStudents);
app.get('/instructors', db.getInstructors);

app.listen(port, () => {
  console.log(`App running on port ${port}..`);
});
