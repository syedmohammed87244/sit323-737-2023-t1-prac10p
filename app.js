const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = Number(a) + Number(b);
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const difference = Number(a) - Number(b);
  res.send(`The difference between ${a} and ${b} is ${difference}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const product = Number(a) * Number(b);
  res.send(`The product of ${a} and ${b} is ${product}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  const quotient = Number(a) / Number(b);
  res.send(`The quotient of ${a} divided by ${b} is ${quotient}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Calculator microservice is running on port ${port}`);
});