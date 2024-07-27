'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('create_contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
        
      },
      sub_title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      text1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text4: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text5: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text6: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text7: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text8: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text9: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      text10: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      added_by: { 
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('create_contact');
  }
};