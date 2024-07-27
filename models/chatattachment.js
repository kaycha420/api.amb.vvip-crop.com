'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatAttachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatAttachment.init({
    chat_message_id: {
      type: DataTypes.INTEGER,
      references: { model: "chat_messages", key: "id" },
      onDelete: "CASCADE",
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chat_group_id: { 
      type: DataTypes.INTEGER,
      references: { model: "chat_groups", key: "id" },
      onDelete: "CASCADE",
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'ChatAttachment',
    tableName: 'chat_attachments',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return ChatAttachment;
};