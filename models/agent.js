'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agent.init({
    endpoint: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      clientname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      agentname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE
      },
  }, {
    sequelize,
    modelName: 'Agent',
    tableName: 'agent',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    

  });
  return Agent;
};