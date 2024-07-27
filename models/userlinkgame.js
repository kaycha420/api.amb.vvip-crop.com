'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLinkGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserLinkGame.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    link_game_id: {
      type: DataTypes.INTEGER,
      references: { model: "link_games", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    linked_game_username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'UserLinkGame',
    tableName: 'user_link_games',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  
  return UserLinkGame;
};