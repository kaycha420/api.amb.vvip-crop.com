'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server_apiscb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Server_apiscb.init({
    roue_server: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      name_server: {
        type: DataTypes.STRING,
        allowNull: true
      },
      devie: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      accnum: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status_server: {
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
      },
  }, {
    sequelize,
    modelName: 'Server_apiscb',
    tableName: 'server_apiscb',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    

  });
  return Server_apiscb;
};