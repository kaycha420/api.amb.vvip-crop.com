"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notify extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Notify.init({
        text: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: "Notify",
        tableName: "notify",
        deletedAt: "deleted_at",
        createdAt: "created_at",
        updatedAt: "updated_at",
    },);




    return Notify;
};