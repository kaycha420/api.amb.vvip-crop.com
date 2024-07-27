'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games_list', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      provider: {
        type: Sequelize.STRING,
        allowNull: true
      },
      game_id: {
        type: Sequelize.STRING,
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
      game_img: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      status: {
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
    await queryInterface.dropTable('games_list');
  }
};