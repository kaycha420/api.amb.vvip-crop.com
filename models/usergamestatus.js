'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserGameStatus.init({
    game_id: {
      type: DataTypes.INTEGER,
      references: { model: "games", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    bet_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    mmr_level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    battle_lab_level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Pending','Participated','Selected','Cancelled','Playing','Played','Leaved','ReadyToOppoSearch','ReadyToGamePlay','OpponentAccepted'),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'UserGameStatus',
    tableName: 'user_game_status',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return UserGameStatus;
};