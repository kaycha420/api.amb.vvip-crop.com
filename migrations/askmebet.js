'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('askmebet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      member: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      key_agent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      prefix: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Web: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      domain: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_run: {
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
    await queryInterface.dropTable('askmebet');
  }
};