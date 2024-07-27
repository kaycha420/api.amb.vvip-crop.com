'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topup_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      alert_admin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      from_bank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_monny: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amount: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      alert: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('topup_history');
  }
};