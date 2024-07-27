'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Request_allscb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Request_allscb.init({
        accnum: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        date_creat: {
            type: DataTypes.DATE,
            allowNull: true
        },
        time_creat: {
            type: DataTypes.TIME,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fron_bank: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name_to: {
            type: DataTypes.STRING,
            allowNull: true
        },
        to_bank: {
            type: DataTypes.STRING,
            allowNull: true
        },
        statsu: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insert_time: {
            type: DataTypes.DATE(6),
            allowNull: true
        },
        status_pay: {
            type: DataTypes.STRING,
            allowNull: true
        },
        remark: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        
        status_show: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Request_allscb',
        tableName: 'request_allscb',
        // deletedAt: 'deleted_at',
         createdAt: "created_at",
         updatedAt: "updated_at",
        // paranoid: true, //use for soft delete with using deleted_at
        // underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Request_allscb;
};