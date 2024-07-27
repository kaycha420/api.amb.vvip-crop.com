"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // name_th: {
      //   type: DataTypes.STRING,d
      //   allowNull: true,
      // },
      code_id: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        
      },
      password: DataTypes.STRING,
      country_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      avatar_unique_name: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      avatar_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sprite_avatar_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
        onDelete: "CASCADE",
      },
      province_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      
        onDelete: "CASCADE",
      },
      district_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
       
        onDelete: "CASCADE",
      },
      sub_district_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
       
        onDelete: "CASCADE",
      },
      postal_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      default_lang: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'EN'
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      is_online: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      is_agree_to_termsandconditions: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      is_18_year_old: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      is_not_robot: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      wallet_address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      wallet_balance_blc: {
        type: DataTypes.FLOAT(32, 2),
        defaultValue: 0,
        allowNull: false,
      },
      current_bet_amount_blc: {
        type: DataTypes.FLOAT(16, 2),
        defaultValue: 0,
        allowNull: false,
      },
      wallet_balance: {
        type: DataTypes.INTEGER,
        defaultValue: 200,
        allowNull: false,
      },
      current_bet_amount: {
        type: DataTypes.FLOAT(16, 2),
        defaultValue: 0,
        allowNull: false,
      },
      is_mob_tab_login: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: true,
      },
      is_firebase_verified: {
        type: DataTypes.BOOLEAN,
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
      last_online_datetime: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: null,
      },
      usergrob: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      user_current_status: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      user_level: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      current_game_id: {
        type: DataTypes.INTEGER,
       
        onDelete: "CASCADE",
        allowNull: true
      },
      user_level: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      line: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      user_ufa: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      pass_ufa: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      accnum: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      bank: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      status: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      aff: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      ip: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
      promotion_id: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );

  User.beforeSave(async (user, options) => {
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

  User.beforeUpdate(async (user, options) => {
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

  User.prototype.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE("password not set");

    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE("invalid password");

    return this;
  };

  User.associate = function (models) {
    User.hasOne(models.Game, {
      sourceKey: 'current_game_id',
      foreignKey: 'id',
      constraints: false,
      as: 'currentGame'
    })
  }

  return User;
};
