const express = require('express');
const generateToken = require('./helpers/generateToken');
const {validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, validatePerson} = require('./middlewares/ecoturismo')
const auth = require('./middlewares/auth');

const app = express()

app.use(express.json());

app.post('/signup', validatePerson, (req, res) => {
  
  const token = generateToken();
  res.status(201).json({ token })
});

app.post('/activities', auth, validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, (req, res) => {
  // dont forget to add the generated token into the request header, otherwise it will never pass the auth middleware
  res.status(201).json({message: 'Atividade cadastrada com sucesso!'})
});


module.exports = app;