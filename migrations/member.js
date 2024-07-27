"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("member", {
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
      line: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      level_user: {
        type: Sequelize.ENUM(["member", "admin", "programmer", "superadmin"]),
        allowNull: true,
      },
      type_option: {
        type: Sequelize.ENUM(["member", "admin"]),
        allowNull: true,
      },
      user_ufa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pass_ufa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accnum: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank: {
        type: Sequelize.STRING,
        allowNull: true,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
      },
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      aff: {
        type: Sequelize.STRING,

        references: { model: "member", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },

      ip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastupdate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      promotion_id: {
        type: Sequelize.INTEGER,
        references: { model: "promotion", key: "id" },
        onDelete: "CASCADE",

        allowNull: true,
      },
      backlist: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      aff_status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      alliance: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      ref: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      scbpay: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kbankpay: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bonus_aff: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      bonus_wl: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      bonus_wl: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      bonus_wl: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      wl_status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      avata_img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      partner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_pay: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      current_Tranid_id: {
        type: Sequelize.INTEGER,
        references: { model: "transaction", key: "id" },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("member");
  },
};
