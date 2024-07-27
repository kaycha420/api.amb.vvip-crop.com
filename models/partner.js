"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partner.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      member_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      partner_ref: {
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
      status_partner: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      insert_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Partner",
      tableName: "partner",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Partner;
};
