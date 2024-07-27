"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account_bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account_bank.init(
    {
      accnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status_scb: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      from_b: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      level: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      option_b: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      time_crul: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tobank_accnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tobank_monney: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      text_data: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      limit_wit: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      limit_d: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      tobank_bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tobank_minmonny: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      tobank_stust: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      baba: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      status_connact: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      from: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name_bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      autowit_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      autowit_minmony: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      autowit_maxmonny: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qr_stust: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      created_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Account_bank",
      tableName: "account_bank",
      // deletedAt: 'deleted_at',
      // createdAt: "created_at",
      // updatedAt: "updated_at",
    },
  );
  return Account_bank;
};
