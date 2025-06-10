const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const questions = require('./data/questions.json');

app.use(express.static('public'));
app.use(express.json());


app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
