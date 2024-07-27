"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("partner", {
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
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      member_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
     
      partner_ref: {
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
    await queryInterface.dropTable("partner");
  },
};
