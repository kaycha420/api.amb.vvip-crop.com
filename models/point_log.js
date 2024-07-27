"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Point_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Point_log.init(
    {
        user_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        item: {
            type: DataTypes.STRING,
            allowNull: true
        },
        point_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        withdraw_status: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        accept_status: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        withdraw_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        accept_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
    },
    {
      sequelize,
      modelName: "Point_log",
      tableName: "point_log",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    //   paranoid: true, //use for soft delete with using deleted_at
    //   underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );
  return Point_log;
};
