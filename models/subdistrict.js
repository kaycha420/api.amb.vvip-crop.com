'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubDistrict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubDistrict.init({
    district_id: { 
      type: DataTypes.INTEGER,
      references: { model: "districts", key: "id" },
      onDelete: "CASCADE",
    },
    sub_district_en: DataTypes.STRING,
    sub_district_th: DataTypes.STRING,
    sub_district_en_short: DataTypes.STRING,
    sub_district_th_short: DataTypes.STRING,
    post_code_main: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    added_by: { type: DataTypes.INTEGER, allowNull: true },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SubDistrict',
    tableName:"sub_districts",
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return SubDistrict;
};