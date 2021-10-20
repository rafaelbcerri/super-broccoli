// aqui vai o código que acessa o banco de dados
const models = require('../db/models');

const getFruits = async (req, res) => {
  const fruits = await models.fruits.findAll();

  return res.send(fruits)
}

const createFruit = async (req, res) => {
  const fruit = await models.fruits.create({
    name: req.body.name,
    pricezinho: req.body.princezinho,
    taPodre: req.body.taPodre
  });

  return res.send(fruit)
}

module.exports = { getFruits, createFruit };
