const express = require('express');

const app = express();
app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/', (req, res) => res.status(200).send('<h1>Olá Fucker</h1>'));

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activitie = activities.find((activitie) => activitie.id === +id);
  console.log(activitie)

  res.status(200).json(activitie)
})

app.get('/myActivities', (req, res) => res.status(200).json(activities));

app.get('/filter/myActivities', (req, res) => {
 const { status } = req.query;
 const display = activities.filter((actv) => actv.status.toLowerCase() === status.toLowerCase());

 res.status(200).json(display);
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  const display = activities.filter((actv) => actv.description.includes(q));

  res.status(200).json(display)
})

module.exports = app;