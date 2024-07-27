'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clan.init({
    user_leader_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    clan_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    clan_initial: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clan_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    min_trophies_to_join: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_aggree_to_rules: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    logo_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Clan',
    tableName: 'clans',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Clan;
};