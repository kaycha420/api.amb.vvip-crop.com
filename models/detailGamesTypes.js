'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailGamesTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailGamesTypes.init({
    gamesType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_th: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_en: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_cn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_vn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        defaultValue: 1,
        type: DataTypes.INTEGER,
        allowNull: true,
      },
 
  }, {
    sequelize,
    modelName: 'DetailGamesTypes',
    tableName: 'detailGamesTypes',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    
  });
  return DetailGamesTypes;
};