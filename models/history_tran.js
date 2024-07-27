'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History_tran extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    History_tran.init({
        accnum_to: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        monny: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bank_to: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bank_from: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accnum_from: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name_to: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        qr: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        add_from: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link_info: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        qr_sting: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        transaction_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tran_options: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'History_tran',
        tableName: "history_tran",
        createdAt: "created_at",
        updatedAt: "updated_at",
      //  paranoid: true, //use for soft delete with using deleted_at
      //  underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return History_tran;
};