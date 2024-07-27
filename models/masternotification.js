'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MasterNotification.init({
    notification_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    notification_desc: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    notification_type: {
      allowNull: false,
      type: DataTypes.ENUM(['Account','Notification']),
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM(['friendRequest','matchInvitation', 'clanInvitation', 'clanApplication', 'alertWithSound']),
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'MasterNotification',
    tableName: "master_notifications",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  MasterNotification.hasMany(MasterNotification, { as: 'childrens', foreignKey: 'notification_type'});
  return MasterNotification;
};