const express = require('express');
const cors = require('cors');
const db = require('./db');
const Joi = require('joi');
const connection = require('./db');
const app = express();
app.use(express.json());
app.use(cors());

// FAIRE AFFICHER LES QUOTES
app.get('/quotes', async (req, res) => {
  try {
    const [quotes] = await db.promise().query('SELECT * FROM quotes');
    res.send(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

app.get('/quotes/:id', (req, res) => {
  const quotesId = req.params.id;
  connection.query(
    'SELECT * FROM quotes WHERE id = ?',
    [quotesId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving quote from database');
      } else if (result.length === 0) {
        res.status(404).send('Quote not found');
      } else {
        res.json(result[0]);
      }
    }
  );
});

// AJOUTER UNE QUOTE AVEC POST
app.post('/quotes', async (req, res) => {
  try {
    const { name, comment } = req.body;
    const { error: validationErrors } = Joi.object({
      name: Joi.string().max(50).required(),
      comment: Joi.string().min(0).required(),
    }).validate({ name, comment }, { abortEarly: false });

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query('INSERT INTO quotes (name, comment) VALUES (?, ?)', [
        name,
        comment,
      ]);

    res.status(201).send({ id: insertId, name, comment });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
// SUPPRIMER UNE QUOTE AVEC DELETE

app.delete('/quotes/:id', (req, res) => {
  const quotesId = req.params.id;
  connection.query(
    'DELETE FROM quotes WHERE id = ?',
    [quotesId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting a quote');
      } else {
        res.sendStatus(204);
      }
    }
  );
});

// FAIRE AFFICHER LES GIFS
app.get('/gifs', async (req, res) => {
  try {
    const [gifs] = await db.promise().query('SELECT * FROM gifs');
    res.send(gifs);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

app.get('/gifs/:id', (req, res) => {
  const gifsId = req.params.id;
  connection.query(
    'SELECT * FROM gifs WHERE id = ?',
    [gifsId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving gif from database');
      } else if (result.length === 0) {
        res.status(404).send('Gif not found');
      } else {
        res.json(result[0]);
      }
    }
  );
});

// AJOUTER UN GIF AVEC POST
app.post('/gifs', async (req, res) => {
  try {
    const { name, gif } = req.body;
    const { error: validationErrors } = Joi.object({
      name: Joi.string().max(50).required(),
      gif: Joi.string().max(200).required(),
    }).validate({ name, gif }, { abortEarly: false });

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query('INSERT INTO gifs (name, gif) VALUES (?, ?)', [name, gif]);

    res.status(201).send({ id: insertId, name, gif });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
// SUPPRIMER UN GIF AVEC DELETE

app.delete('/gifs/:id', (req, res) => {
  const gifsId = req.params.id;
  connection.query('DELETE FROM gifs WHERE id = ?', [gifsId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting a gif');
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports.app = app;
