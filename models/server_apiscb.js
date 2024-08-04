"use strict";
const { Model } = require("sequelize");
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
  Server_apiscb.init(
    {
      
      auth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      devie: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status_server: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    
    },
    {
      sequelize,
      modelName: "Server_apiscb",
      tableName: "server_apiscb",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Server_apiscb;
};
