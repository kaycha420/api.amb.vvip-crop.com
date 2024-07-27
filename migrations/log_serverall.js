"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("log_serverall", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      username_level: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      username_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      devies_pc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_login: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      insert_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("log_serverall");
  },
};
