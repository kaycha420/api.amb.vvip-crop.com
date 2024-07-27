"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pro_history", {
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
      amount_d: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      pro_amount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      namepro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      x: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      
      level_pro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      level_pro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      useramb: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ref: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      insert_date: {
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
    await queryInterface.dropTable("pro_history");
  },
};
