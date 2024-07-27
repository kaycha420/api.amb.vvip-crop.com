'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAccount.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      allowNull: false,
    },
    credit: {
      type: DataTypes.FLOAT(16, 2),
      allowNull: false,
      defaultValue: 0
    },
    debit: {
      type: DataTypes.FLOAT(16, 2),
      allowNull: false,
      defaultValue: 0
    },
    balance: {
      type: DataTypes.FLOAT(16, 2),
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM(['pending', 'successed', 'rejected']),
      allowNull: false,
      defaultValue: 'pending'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'UserAccount',
    tableName: "useraccounts",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return UserAccount;
};