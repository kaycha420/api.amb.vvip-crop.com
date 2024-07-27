"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Badge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Badge.init(
    {
      name: { type: DataTypes.STRING, allowNull: true },
      acc_num: { type: DataTypes.STRING, allowNull: true },
      username: { type: DataTypes.STRING, allowNull: true },
      added_by: { type: DataTypes.STRING, allowNull: true },
      password: { type: DataTypes.STRING, allowNull: true },
      pin: { type: DataTypes.INTEGER, allowNull: true },
      code: { type: DataTypes.INTEGER, allowNull: true },
      bankfrom: { type: DataTypes.STRING, allowNull: true },
      status: { type: DataTypes.INTEGER, allowNull: true },
      imgurl: { type: DataTypes.STRING, allowNull: true },
      optionbank: { type: DataTypes.STRING, allowNull: true },
      slot: { type: DataTypes.INTEGER, allowNull: true },
      option_bank: { type: DataTypes.STRING, allowNull: true },
      level_bank: { type: DataTypes.INTEGER, allowNull: true },
      status_connact: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "Badge",
      tableName:"badges",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );
  return Badge;
};
