'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bank', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankNameEn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankNameTh: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountLength: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kbank_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scb_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_pic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_pic: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('bank');
  }
};