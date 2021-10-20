'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {
    static associate(models) {

    }
  };
  Fruit.init({
    name: DataTypes.STRING,
    pricezinho: DataTypes.INTEGER,
    taPodre: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'fruits',
  });
  return Fruit;
};
