const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.getChocolatesByName(name);
  res.status(chocolates.length === 0 ? 404 : 200).json(chocolates)
});

app.get('/chocolates/total', async (req, res) => {
  const response = await cacaoTrybe.getTotalChocolates();
  res.status(200).json({ response })
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  console.log('nice')
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacaoTrybe.updateChocolateById(id, { name, brandId } );

  if(chocolate) return res.status(200).json(chocolate);
  return res.status(404).json({message: 'Chocolate not found'})
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});






module.exports = app;