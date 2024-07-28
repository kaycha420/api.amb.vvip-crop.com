"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accountbank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accountbank.init(
    {
      accnum: {
        type: DataTypes.STRING,
       
        allowNull: true
      },
      name_accnum: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status_scb: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      from_b: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_id: {
        type: DataTypes.INTEGER,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true
      },
      setting_id: {
        type: DataTypes.INTEGER,
        references: { model: "setting", key: "id" },
        onDelete: "CASCADE",
        allowNull: true
      },
      level: {
        type: DataTypes.STRING,
        allowNull: true
      },
      option_b: {
        type: DataTypes.STRING,
        allowNull: true
      },
      time_crul: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tobank_accnum: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tobank_monney: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      text_data: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      limit_wit: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      limit_d: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      tobank_bank: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tobank_minmonny: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      tobank_stust: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      baba: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      status_connact: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      from_accnum: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name_bank: {
        type: DataTypes.STRING,
        allowNull: true
      },
      autowit_status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      autowit_minmony: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status_run: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
   
    },
    {
      sequelize,
      modelName: "Accountbank",
      tableName: "accountbank",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Accountbank;
};
  