'use strict';
const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log_serverall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log_serverall.init({
    username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username_level: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      devies_pc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ip_login: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      insert_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
  }, {
    sequelize,
    modelName: 'Log_serverall',
    tableName: "log_serverall",
    //making underscored colomn as deletedAt to deleted_at
  });
  return Log_serverall;
};