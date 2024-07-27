"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bonus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bonus.init(
    {
      title_en: { type: DataTypes.STRING, allowNull: true },
      title_th: { type: DataTypes.STRING, allowNull: true },
      amount: { type: DataTypes.DOUBLE, allowNull: false },
      added_by: { type: DataTypes.INTEGER, allowNull: true },
      deleted_at: { type: DataTypes.DATE, allowNull: true },
    },
    {
      sequelize,
      modelName: "Bonus",
      tableName: "bonuses",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true, //making underscored colomn as deletedAt to deleted_at
    },
  );
  return Bonus;
};
