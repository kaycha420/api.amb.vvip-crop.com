'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tran_chack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tran_chack.init({
    rawQrBarcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fromAccountNameEn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fromAccountNameTh: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fromBankId: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    fromBankName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slipBankCode: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    slipType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toAccountNameEn: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    toAccountNameTh: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toAccountNo: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    toBankId: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    toBankName: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    transAmount: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    transDate: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    transRef: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    transTime: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contact_reason_id: {
      type: DataTypes.INTEGER,
      
      allowNull: true,
    },
    description_en: { 
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_th: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_member: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fromAccountNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
   
    status: {
      type: DataTypes.ENUM('Pending','Success', 'Cancel'),
      allowNull: false
    },
    added_by: { type: DataTypes.STRING, allowNull: true },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Tran_chack',
    tableName: 'tran_chack',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",

  });
  return Tran_chack;
};