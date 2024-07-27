'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSpriteAvatar extends Model {
    /** 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSpriteAvatar.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    nft_item_id: {
      type: DataTypes.INTEGER,
      references: { model: "nft_items", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'UserSpriteAvatar',
    tableName: 'user_sprite_avatars',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return UserSpriteAvatar;
};