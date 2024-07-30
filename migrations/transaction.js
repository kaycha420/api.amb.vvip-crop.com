"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "member", key: "id" },
        onDelete: "CASCADE",
      },
      match_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status_showadmin: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status_showmember: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      amount: {
        type: Sequelize.FLOAT(16, 2),
        allowNull: true,
        defaultValue: 0,
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_from: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      acc_from: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_member: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      txn_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      datamember: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_to: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      add_from: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ref: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      c_before: {
        type: Sequelize.FLOAT(16, 1),
        allowNull: true,
      },
      c_after: {
        type: Sequelize.FLOAT(16, 1),
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      datw_new: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      type_option: {
        type: Sequelize.ENUM([
          "ฝาก",
          "ถอน",
          "คืนยอดเสีย",
          "ค่าคอม",
          "โบนัส",
          "ฟรี",
        ]),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(["pending", "success", "rejected", "cancel"]),
        allowNull: false,
      },
      nodere: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      addby: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_new1: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("transactions");
  },
};
