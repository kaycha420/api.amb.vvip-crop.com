'use strict';
const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Match.init({
    game_id: {
      type: DataTypes.INTEGER,
      references: { model: "games", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    team_one_id: {
      type: DataTypes.INTEGER,
      references: { model: "teams", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    team_two_id: {
      type: DataTypes.INTEGER,
      references: { model: "teams", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    total_players: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    bet_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    min_mmr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    max_mmr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    win_team_id: {
      type: DataTypes.INTEGER,
      references: { model: "teams", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    lose_team_id: {
      type: DataTypes.INTEGER,
      references: { model: "teams", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    live_match_id:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bonus: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_custom_game: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      allowNull: true,
    },
    room_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    room_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Pending','Selected','Playing','Played'),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Match',
    tableName: "matches",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Match;
};