"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Partner_sumall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partner_sumall.init(
    {
      username_partner: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      member_from: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      disprosit_f: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      witdrow_all: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deposit_all: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
      from_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      partner_x: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      ref: {
        type: DataTypes.STRING,
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
      modelName: "Partner_sumall",
      tableName: "partner_sumall",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Partner_sumall;
};
