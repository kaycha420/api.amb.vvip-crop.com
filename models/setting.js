'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting.init({
    line: {
        type: DataTypes.STRING,
        allowNull: true
      },
      token_line: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      token_line_game: {
        type: DataTypes.STRING,
        allowNull: true
      },
      token_line_depo: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      token_line_with: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name_web: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      d_limit: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      w_limit: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      aff_d: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      aff_w: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      aff_m: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      wl_wit: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      wl_limit_d: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      re_sitekey: { 
        type: DataTypes.TEXT,
        allowNull: true
      },
      re_secretkey: { 
        type: DataTypes.TEXT,
        allowNull: true
      },
      auto_login: { 
        type: DataTypes.TEXT,
        allowNull: true
      },
      perfix: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      numbercount: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      acc_ufa: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      ufa_pass: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      total_withdraw_amount: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_withdraw: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total_timewithdraw: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      
      auto_withdraw: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      money_linit: { 
        type: DataTypes.FLOAT,
        allowNull: true
      },
      aff_online: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      wl_online: { 
        type: DataTypes.INTEGER,
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
    modelName: 'Setting',
    tableName: 'setting',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",

  });
  return Setting;
};