'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameBetAmount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameBetAmount.init({
    // game_id: {
    //   type: DataTypes.INTEGER,
    //   references: { model: "games", key: "id" },
    //   onDelete: "CASCADE",
    //   allowNull: false,
    // },
    amount: DataTypes.DOUBLE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GameBetAmount',
    tableName: 'game_bet_amounts',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return GameBetAmount;
};