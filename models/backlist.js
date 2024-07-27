'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Backlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Backlist.init({
    username: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      district: {
        type: DataTypes.STRING,
        allowNull: true
      },
      level_backlist: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type_back: {
        type: DataTypes.ENUM(['ก่อกวน', 'สายตำรวจ', 'โกง']),
        allowNull: true
      },
      userfrom_web: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // defaultValue: 1
      },
      added_by: { 
        type: DataTypes.INTEGER,
        allowNull: true 
      },
      accnum: { 
        type: DataTypes.STRING,
        allowNull: true 
      },
      name: { 
        type: DataTypes.STRING,
        allowNull: true 
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
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
    modelName: 'Backlist',
    tableName: 'backlist',
    // deletedAt: "deleted_at",
    // createdAt: "created_at",
    // updatedAt: "updated_at",
    //paranoid: true, //use for soft delete with using deleted_at
   // underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Backlist;
};