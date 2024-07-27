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
      password2: {
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
      first_dep: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bankNameTh: {
        type: Sequelize.STRING,
        allowNull: true,
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
        defaultValue: 0,
        type: Sequelize.INTEGER,
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

      status_pay: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      bonus_aff: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      bonus_wl: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      wl_status: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      avata_img: {
        type: Sequelize.STRING,
        defaultValue: "avatar.png",
        allowNull: true,
      },
      partner: {
        type: Sequelize.STRING,

        allowNull: true,
      },
      create_by: {
        type: Sequelize.STRING,

        allowNull: true,
      },
      edit_by: {
        type: Sequelize.STRING,

        allowNull: true,
      },
      date_c: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: true,

        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("member");
  },
};
