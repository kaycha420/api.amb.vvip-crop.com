'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('backlist', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true
      },
      level_backlist: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type_back: {
        type: Sequelize.ENUM(['ก่อกวน', 'สายตำรวจ', 'โกง']),
        allowNull: true
      },
      userfrom_web: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      added_by: { 
        type: Sequelize.INTEGER,
        allowNull: true 
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('backlist');
  }
};