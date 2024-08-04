'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('server_apiscb', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      auth: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      devie: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pin: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accnum: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_server: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('server_apiscb');
  }
};