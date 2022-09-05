const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: 'Ocorreu um erro ao cadastrar uma pessoa'})
  }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.sqlMessage})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const peopleId = req.params.id;
    const [[result]] = await peopleDB.findById(peopleId)
    if(result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({message: 'Pessoa nao encontrada'});
    };
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.sqlMessage})
  };
});

router.put('/:id', async (req, res) => {
  try {
    const peopleId = req.params.id;
    const [result] = await peopleDB.updateById(peopleId, req.body);
    if(result.affectedRows > 0){
      res.status(200).json({message: `Pessoa de id ${peopleId} atualizada com sucesso`})
    }else {
      res.status(404).json({message: `Não existe uma pessoa com o id ${peopleId} para ser atualizada`})
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.sqlMessage})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const peopleId = req.params.id;
    const [result] = await peopleDB.deleteById(peopleId);
    if(result.affectedRows > 0) {
      res.status(200).json({message: `Pessoa de id ${peopleId} excluida com sucesso`})
    }else {
      res.status(404).json({message: `Não existe uma pessoa com o id ${peopleId} para ser excluida`});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.sqlMessage})
  }
});

module.exports = router;