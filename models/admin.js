"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stats: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      secert_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      auth_key: {
        type: DataTypes.STRING,
        allowNull: true
      },
     
    },
    {
      sequelize,
      modelName: "Admin",
      tableName: "admin",
    },
  );
  


  
  return Admin;
};
