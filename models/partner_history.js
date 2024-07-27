"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Partner_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partner_history.init(
    {
      user_member: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_partner: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      total_withdraw: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      total_deposit: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      total_earning_withdraw: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
     
      total_earning_deposit: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      partner_x: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      total_all: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      deposit: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      insert_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status_partner: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Partner_history",
      tableName: "partner_history",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Partner_history;
};
