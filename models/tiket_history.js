'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tiket_history extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Tiket_history.init({
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tiket: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      addby: {
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
    }, {
        sequelize,
        modelName: 'Tiket_history',
        tableName: "tiket_history",
        deletedAt: 'deleted_at',
        createdAt: "created_at",
        updatedAt: "updated_at",
        //paranoid: true, //use for soft delete with using deleted_at
        // underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Tiket_history;
};