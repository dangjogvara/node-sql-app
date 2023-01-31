require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

const getStudents = (req, res) => {
  client.query('SELECT * FROM student', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getInstructors = (req, res) => {
  client.query('SELECT * FROM instructor', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getStudents,
  getInstructors,
};
