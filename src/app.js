const express = require('express');
const db = require('./db');
const app = express();

const items = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
];

app.get('/', (req, res) => res.send('Hello Thierno'));

app.get('/things', (req, res) => {
  console.log('handling GET /things');
  res.send(items);
});

// FAIRE AFFICHER TOUS LES PRODUITS
app.get('/quotes', async (req, res) => {
  try {
    const [quotes] = await db.promise().query('SELECT * FROM quotes');
    res.send(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});
db.connect((err) => {
  if (err) console.error('error connecting to db');
});
module.exports.app = app;
