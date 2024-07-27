"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Friendship.init(
    {
      from_user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      to_user_id: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      request_status: {
        type: DataTypes.ENUM("Pending","Requested", "Accepted", "Rejected"),
        allowNull: false,
      },
      is_favourite: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      // is_blocked:{
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Friendship",
      tableName: "friendships",
      deletedAt: 'deleted_at',
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true, //use for soft delete with using deleted_at
      underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );

  // Friendship.associate = (models) => {
  //   Friendship.hasMany(models.ChatParticipant, {
  //     foreignKey: 'user_id'
  //   });
  // }

  return Friendship;
};
