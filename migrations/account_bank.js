'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('account_bank', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accnum: {
        type: Sequelize.STRING,
       
        allowNull: true
      },
      name_accnum: {
        type: Sequelize.STRING,
        allowNull: true
      },
      username: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_scb: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      from_b: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bank_id: {
        type: Sequelize.INTEGER,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true
      },
      setting_id: {
        type: Sequelize.INTEGER,
        references: { model: "setting", key: "id" },
        onDelete: "CASCADE",
        allowNull: true
      },
      level: {
        type: Sequelize.STRING,
        allowNull: true
      },
      option_b: {
        type: Sequelize.STRING,
        allowNull: true
      },
      time_crul: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tobank_accnum: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tobank_monney: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      text_data: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      limit_wit: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      limit_d: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      tobank_bank: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tobank_minmonny: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      tobank_stust: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      baba: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      status_connact: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      from_accnum: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name_bank: {
        type: Sequelize.STRING,
        allowNull: true
      },
      autowit_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      autowit_minmony: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_run: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    await queryInterface.dropTable('account_bank');
  }
};