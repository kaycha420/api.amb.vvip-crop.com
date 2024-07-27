"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("request_qrcode", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accnum: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      date_creat: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      time_creat: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fron_bank: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      to_bank: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      statsu: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      insert_time: {
        type: Sequelize.DATE(6),
        allowNull: true,
      },
      status_pay: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      remark: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      status_show: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("request_qrcode");
  },
};
