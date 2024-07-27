"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("partner_sumall", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username_partner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      member_from: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      disprosit_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      witdrow_all: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deposit_all: {
        type: Sequelize.STRING,
        allowNull: true,
      },
     
      from_by: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      partner_x: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("partner_sumall");
  },
};
