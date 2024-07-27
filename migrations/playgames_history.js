'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('play_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summayry: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      game_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      provider: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userid_req: {
        type: Sequelize.STRING,
        allowNull: true
      },
      img_game: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      gameName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gameCategory: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('play_history');
  }
};