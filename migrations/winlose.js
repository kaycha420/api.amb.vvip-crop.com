'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('winlose', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      acc_ufa: {
        type: Sequelize.STRING,
        allowNull: true
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      valid_amount: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      wl_amount: { 
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      total_wl_com: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      wl_com: { 
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      game_date: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      game_count: { 
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status_com: { 
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_name: { 
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
    await queryInterface.dropTable('winlose');
  }
};