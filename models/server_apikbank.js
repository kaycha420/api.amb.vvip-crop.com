'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server_apikbank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Server_apikbank.init({
    roue_server: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      name_server: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status_server: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      pin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      accountNo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stateFile: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      url_api: {
        type: DataTypes.TEXT,
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
      },
  }, {
    sequelize,
    modelName: 'Server_apikbank',
    tableName: 'server_apikbank',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    

  });
  return Server_apikbank;
};