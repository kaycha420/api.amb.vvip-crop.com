'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTrophy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTrophy.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    trophy_id: {
      type: DataTypes.INTEGER,
      references: { model: "trophies", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'UserTrophy',
    tableName: 'user_trophies',
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return UserTrophy;
};