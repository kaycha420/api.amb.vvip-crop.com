"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
     
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
       
      },
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activation_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      forgotten_password_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
       
      },
      last_login: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      account_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      affiliate_number: {
        type: DataTypes.TEXT,
        defaultValue: 0,
        allowNull: false,
      },
      idline: {
        type: DataTypes.STRING,
        defaultValue: 0,
        allowNull: false,
      },
      ticket: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      auth_token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fcm_token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
     
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );
  
  Users.beforeSave(async (user, options) => {
    let err;

    if (Users.changed("password")) {
      let salt, hash;
      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) TE(err.message, true);

      [err, hash] = await to(bcrypt.hash(Users.password, salt));
      if (err) TE(err.message, true);

      user.password = hash;
    }
  });

  Users.beforeUpdate(async (user, options) => {
    let err;

    if (user.changed("password")) {
      let salt, hash;
      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) TE(err.message, true);

      [err, hash] = await to(bcrypt.hash(user.password, salt));
      if (err) TE(err.message, true);

      user.password = hash;
    }
  });

  Users.prototype.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE("password not set");

    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE("invalid password");

    return this;
  };


  return Users;
 
};
