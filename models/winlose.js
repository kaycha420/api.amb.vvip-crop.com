'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Winlose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Winlose.init({
    acc_ufa: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      valid_amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      wl_amount: { 
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      total_wl_com: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      wl_com: { 
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      game_date: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      game_count: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status_com: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_name: { 
        type: DataTypes.STRING,
        allowNull: true
      },

      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Winlose',
    tableName: 'winlose',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",

  });
  return Winlose;
};