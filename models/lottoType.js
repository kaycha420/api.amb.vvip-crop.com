"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LottoType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    LottoType.init({
        game: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          gameType: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          en: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          th: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: true,
          },
    }, {
        sequelize,
        modelName: "LottoType",
        tableName: "lottoType",
        deletedAt: "deleted_at",
        createdAt: "created_at",
        updatedAt: "updated_at",
    },);




    return LottoType;
};