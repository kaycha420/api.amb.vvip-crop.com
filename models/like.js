"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: { model: "posts", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      comment_id: {
        type: DataTypes.INTEGER,
        references: { model: "comments", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      is_liked: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Like",
      tableName: "likes",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );
  return Like;
};
