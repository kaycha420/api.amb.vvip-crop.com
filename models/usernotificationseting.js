'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserNotificationSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserNotificationSetting.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    master_notification_id: {
      type: DataTypes.INTEGER,
      references: { model: "master_notifications", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    notification_status: {
      type: DataTypes.TINYINT(1),
      defaultValue: 1,
      allowNull: false
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'UserNotificationSetting',
    tableName: "user_notification_setting",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return UserNotificationSetting;
};