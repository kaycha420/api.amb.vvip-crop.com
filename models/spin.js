"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Spin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spin.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      background: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      max_spin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      current_spin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      added_by: {
        type: DataTypes.INTEGER,
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
    },
    {
      sequelize,
      modelName: "Spin",
      tableName: "spin",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      //  paranoid: true, //use for soft delete with using deleted_at
      // underscored: true, //making underscored colomn as deletedAt to deleted_at
    },
  );
  return Spin;
};
