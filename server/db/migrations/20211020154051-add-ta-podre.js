'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'fruits',
      'taPodre',
     Sequelize.BOOLEAN
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'fruits',
      'taPodre',
    );
  }
};
