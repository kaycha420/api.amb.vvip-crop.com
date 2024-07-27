'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdminRole.init({
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_status: {
      type: DataTypes.TINYINT(1),
      defaultValue: 1,
      allowNull: false
    },
    added_by: { type: DataTypes.INTEGER, allowNull: true },
  }, {
    sequelize,
    modelName: 'AdminRole',
    tableName: 'admin_roles',
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    /** don't add the timestamp attributes (updatedAt, createdAt) */
    // timestamps: false,

    /** don't delete database entries but set the newly added attribute deletedAt
    to the current date (when deletion was done). paranoid will only work if
    timestamps are enabled */
    paranoid: true,

    /**  don't use camelcase for automatically added attributes but underscore style
     so updatedAt will be updated_at */
    underscored: true,

    /** disable the modification of tablenames; By default, sequelize will automatically
    transform all passed model names (first parameter of define) into plural.
    if you don't want that, set the following */
    // freezeTableName: true,
  });
  return AdminRole;
};