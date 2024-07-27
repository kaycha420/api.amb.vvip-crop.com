'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pro_history extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Pro_history.init({
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount_d: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      pro_amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      namepro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pro_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      x: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      
      level_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      level_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      useramb: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ref: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      insert_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
        sequelize,
        modelName: 'Pro_history',
        tableName: "pro_history",
        deletedAt: 'deleted_at',
        createdAt: "created_at",
        updatedAt: "updated_at",
        //paranoid: true, //use for soft delete with using deleted_at
        // underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Pro_history;
};