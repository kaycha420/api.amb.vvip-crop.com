"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("setting", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      line: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      token_line: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      token_line_game: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      token_line_depo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      token_line_with: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_web: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      d_limit: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      w_limit: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      aff_d: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      aff_w: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      aff_m: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      wl_wit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      wl_limit_d: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      re_sitekey: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      re_secretkey: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      auto_login: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      perfix: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numbercount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      acc_ufa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ufa_pass: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_withdraw_amount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_withdraw: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_timewithdraw: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      auto_withdraw: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      money_linit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      aff_online: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      wl_online: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("setting");
  },
};
