'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server_api extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Server_api.init({
    endpoint_apiufa : {
        type: DataTypes.STRING,
        allowNull: true
      },
      token_v: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      token_e: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      is_online: { 
        type: DataTypes.INTEGER,
        allowNull: true
      },
      url_gettoken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_gettoken: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      pass_gettoken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      getdata_start: {
        type: DataTypes.DATE,
        allowNull: true
      },
      getdata_end: {
        type: DataTypes.DATE,
        allowNull: true
      },
      affter_data: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      befor_data: {
        type: DataTypes.INTEGER,
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
    modelName: 'Server_api',
    tableName: 'server_api',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    

  });
  return Server_api;
};