"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Follower.init(
    {
      from_user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      to_user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      is_follow: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Follower",
      tableName:"followers",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );
  return Follower;
};
