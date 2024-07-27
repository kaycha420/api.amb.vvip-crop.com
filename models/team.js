'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    game_id: {
      type: DataTypes.INTEGER,
      references: { model: "games", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    unique_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true,
    },
    individual_amount: {
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
    bonus: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('SingleSearch','CreateTeam', 'CustomGame'),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Pending','Expired','Participated','Selected','Playing','Played'),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Team',
    tableName: "teams",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Team;
};