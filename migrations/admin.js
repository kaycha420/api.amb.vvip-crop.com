"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin", {
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
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profile_photo: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      admin_status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        allowNull: false,
      },
      auth_token: Sequelize.TEXT,

      added_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      level_user: {
        type: Sequelize.ENUM(["member", "admin", "programmer", "superadmin"]),
        allowNull: false,
      },
      fcm_token: {
        allowNull: true,
        type: Sequelize.TEXT,
      },

      status: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 1,
      },

      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("admin");
  },
};
