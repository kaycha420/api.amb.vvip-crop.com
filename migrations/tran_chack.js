'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tran_chack', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rawQrBarcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fromAccountNameEn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fromAccountNameTh: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fromBankId: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      fromBankName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      slipBankCode: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      slipType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      toAccountNameEn: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      toAccountNameTh: {
        type: Sequelize.STRING,
        allowNull: true
      },
      toAccountNo: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      toBankId: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      toBankName: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      transAmount: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      transDate: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      transRef: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      transTime: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      contact_reason_id: {
        type: Sequelize.INTEGER,
        
        allowNull: true,
      },
      description_en: { 
        type: Sequelize.TEXT,
        allowNull: true
      },
      description_th: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      img_url: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_member: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fromAccountNo: {
        type: Sequelize.STRING,
        allowNull: true
      },
     
      status: {
        type: Sequelize.ENUM('Pending','Success', 'Cancel'),
        allowNull: false
      },
      added_by: { type: Sequelize.STRING, allowNull: true },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tran_chack');
  }
};