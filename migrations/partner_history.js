"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("partner_history", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_member: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_partner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_withdraw: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_deposit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_earning_withdraw: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
     
      total_earning_deposit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      deposit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      
      partner_x: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_all: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      insert_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status_partner: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
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
    await queryInterface.dropTable("partner_history");
  },
};
