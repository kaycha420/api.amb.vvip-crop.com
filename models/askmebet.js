"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Askmebet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Askmebet.init(
    {
      agent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      member: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      key_agent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      prefix: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Web: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      domain: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Askmebet",
      tableName: "askmebet",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Askmebet;
};
