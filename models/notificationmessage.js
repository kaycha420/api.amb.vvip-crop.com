'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationMessage.init({
    notification_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notification_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notification_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
    notification_icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    master_notification_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type_option: {
      type: DataTypes.ENUM(['ฝาก', 'ถอน', 'สมัคร', 'โอนเงิน','คืนยอดเสีย','ค่าคอม', 'โบนัส', 'ฟรี']),
      allowNull: true,
     
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: { model: "teams", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    from_user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: true,
    },
    is_read: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('MatchInvitation','MatchInvitationAccept', 'MatchInvitationDecline', 'AcceptFrientRequest', 'RejectFrientRequest'
      ,'ClanJoinInvitation', 'ClanJoinAccept', 'ClanJoinDecline', 'ClanJoinDecline', 'Mailbox','showadmin'),
      allowNull: true
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
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
    modelName: 'NotificationMessage',
    tableName: "notificationmessage",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return NotificationMessage;
};