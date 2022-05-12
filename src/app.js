/* eslint-disable camelcase */
const express = require('express');
const cors = require('cors');
const db = require('./db');
const Joi = require('joi');
const connection = require('./db');
const app = express();
app.use(express.json());
app.use(cors());

// FAIRE AFFICHER LES POINT
app.get('/point', async (req, res) => {
  try {
    const [point] = await db.promise().query('SELECT * FROM point');
    res.send(point);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

app.get('/point/:id', (req, res) => {
  const pointId = req.params.id;
  connection.query(
    'SELECT * FROM point WHERE id = ?',
    [pointId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving point from database');
      } else if (result.length === 0) {
        res.status(404).send('Point not found');
      } else {
        res.json(result[0]);
      }
    }
  );
});

// AJOUTER UN POINT AVEC POST
app.post('/point', async (req, res) => {
  try {
    const { nom, categorie, voie, code_postal, commune, lat, lon, info } =
      req.body;
    const { error: validationErrors } = Joi.object({
      nom: Joi.string().max(50).required(),
      categorie: Joi.string().max(50).required(),
      voie: Joi.string().max(200).required(),
      code_postal: Joi.string().max(10).required(),
      commune: Joi.string().max(50).required(),
      lat: Joi.string().max(30).required(),
      lon: Joi.string().max(30).required(),
      info: Joi.string().max(300),
    }).validate(
      { nom, categorie, voie, code_postal, commune, lat, lon, info },
      { abortEarly: false }
    );

    if (validationErrors) {
      return res.status(422).json({ errors: validationErrors.details });
    }
    const [{ insertId }] = await db
      .promise()
      .query(
        'INSERT INTO point (nom, categorie, voie, code_postal, commune, lat, lon, info) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nom, categorie, voie, code_postal, commune, lat, lon, info]
      );

    res.status(201).send({
      id: insertId,
      nom,
      categorie,
      voie,
      code_postal,
      commune,
      lat,
      lon,
      info,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
// SUPPRIMER UNE QUOTE AVEC DELETE

app.delete('/point/:id', (req, res) => {
  const pointId = req.params.id;
  connection.query(
    'DELETE FROM point WHERE id = ?',
    [pointId],
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

module.exports.app = app;
