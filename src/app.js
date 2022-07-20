/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const express = require('express');
const cors = require('cors');
const db = require('./db');
const connection = require('./db');
const app = express();
app.use(express.json());
app.use(cors());

// FAIRE AFFICHER LES SMARTPHONES
app.get('/phone', async (req, res) => {
  try {
    const [phone] = await db.promise().query('SELECT * FROM phone');
    res.send(phone);
  } catch (err) {
    console.error(err);
    res.status(500).send('something wrong happened');
  }
});

app.get('/phone/:id', (req, res) => {
  const phoneId = req.params.id;
  connection.query(
    'SELECT * FROM phone WHERE id = ?',
    [phoneId],
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

// AJOUTER UN SMARTPHONE AVEC POST
app.post('/phone', async (req, res) => {
  try {
    const {
      nom,
      marque,
      note,
      prix,
      ecran,
      image,
      photo,
      indice,
      utilisation,
      eco,
    } = req.body;
    const [{ insertId: id }] = await db
      .promise()
      .query(
        'INSERT INTO phone (nom, marque, note, prix, ecran, image, photo, indice, utilisation, eco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nom, marque, note, prix, ecran, image, photo, indice, utilisation, eco]
      );

    res.send({
      nom,
      marque,
      note,
      prix,
      ecran,
      image,
      photo,
      indice,
      utilisation,
      eco,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Something bad happened');
  }
});

// SUPPRIMER UN SMARTPHONE AVEC DELETE

app.delete('/phone/:id', (req, res) => {
  const phoneId = req.params.id;
  connection.query(
    'DELETE FROM phone WHERE id = ?',
    [phoneId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting a quote');
      } else {
        res.sendStatus(204).send('Phone deleted successfully... :(');
      }
    }
  );
});

// MODIFIER UNE INFO

app.put('/phone/:id', (req, res) => {
  const phoneId = req.params.id;
  const phonePropsToUpdate = req.body;
  connection.query(
    'UPDATE phone SET ? WHERE id = ?',
    [phonePropsToUpdate, phoneId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating a album');
      } else {
        res.status(200).send('Phone caracteristic updated successfully 🎉');
      }
    }
  );
});

module.exports.app = app;
