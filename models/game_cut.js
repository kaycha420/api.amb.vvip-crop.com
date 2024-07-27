'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game_c extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game_c.init({
    name_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name_th: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_th: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_of_participant: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_participant_per_team: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    game_icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cover_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lobby_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game_website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    added_by: { type: DataTypes.INTEGER, allowNull: true },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Game_c',
    tableName: 'games_index',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at

  });
  return Game_c;
};