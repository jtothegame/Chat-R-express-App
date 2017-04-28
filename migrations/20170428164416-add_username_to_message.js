'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
    'Messages',
    'username',
      {
      type: Sequelize.STRING
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Messages", "username");
  }
};
