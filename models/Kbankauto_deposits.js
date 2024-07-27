'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kbankauto_deposits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kbankauto_deposits.init({
    accnum: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    text: DataTypes.TEXT,
    bankfrom: DataTypes.STRING,
    optionrun: DataTypes.INTEGER,
    pin: DataTypes.STRING,
    accautowit: DataTypes.STRING,
    bankautowit: DataTypes.STRING,
    devie: DataTypes.TEXT,
    monnyautowit: DataTypes.FLOAT,
    monnylowautowit: DataTypes.FLOAT,
    status2: DataTypes.INTEGER,
    status_scb: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    added_by: { type: DataTypes.INTEGER, allowNull: true },
  }, {
    sequelize,
    modelName: 'Kbankauto_deposits',
    tableName:"kbankauto_deposit",
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Kbankauto_deposits;
};