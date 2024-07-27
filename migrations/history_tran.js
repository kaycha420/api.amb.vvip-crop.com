"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("history_tran", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accnum_to: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      monny: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_to: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_to_id: {
        type: Sequelize.INTEGER,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      bank_from_id: {
        type: Sequelize.INTEGER,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      bank_from: {
        type: Sequelize.STRING,

        allowNull: true,
      },
      accnum_from: {
        type: Sequelize.INTEGER,
        references: { model: "account_bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      name_to: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qr: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      add_from: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      link_info: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qr_sting: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transactions_id: {
        type: Sequelize.INTEGER,
        references: { model: "transactions", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      tran_options: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("history_tran");
  },
};
