"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Qr_prompt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Qr_prompt.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      amount_req: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      
      date_creat: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      time_creat: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fron_bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      to_bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statsu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      insert_time: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      status_pay: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      status_show: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Qr_prompt",
      tableName: "qr_prompt",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // paranoid: true, //use for soft delete with using deleted_at
      // underscored: true //making underscored colomn as deletedAt to deleted_at
    },
  );
  return Qr_prompt;
};
