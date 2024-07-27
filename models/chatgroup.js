'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatGroup.init({
    chat_group_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group_type: {
      type: DataTypes.ENUM('Individual', 'Group'),
      allowNull: false
    },
    in_for: {
      type: DataTypes.ENUM('World', 'Clan', 'Match', 'Friend'),
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'ChatGroup',
    tableName: 'chat_groups',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return ChatGroup;
};