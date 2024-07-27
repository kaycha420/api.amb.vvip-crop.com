'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Minigame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Minigame.init({
    name_game: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_spin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url_play: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url_img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_play: {
      type: DataTypes.STRING,
      allowNull: true
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addtype_amount: {
      type: DataTypes.ENUM(["เข้ายูสเลย", "แอดมินยืนยันก่อน",]),
      allowNull: true,
    },
    addtype_spin: {
      type: DataTypes.ENUM(["ติดเงื่อนไขถอน", "ถอนไม่มีเงื่อนไข",]),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Minigame',
    tableName: 'minigame',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",


  });
  return Minigame;
};