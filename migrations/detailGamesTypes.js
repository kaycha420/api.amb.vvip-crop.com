"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("detailGamesTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gamesType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_th: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_en: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_cn: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_vn: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable("detailGamesTypes");
  },
};
