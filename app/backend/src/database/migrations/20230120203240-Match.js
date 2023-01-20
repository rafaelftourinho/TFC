'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      home_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      away_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      away_Team_Goals: {
        type: Sequelize.INTEGER,

      },
      in_Progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
