'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Endpoist_linkufa extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Endpoist_linkufa.init({
        url_endpost: {
            type: DataTypes.STRING,
            allowNull: true
        },
        token_v: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        token_e: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        url_endpost2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        url_endpost3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        token_v2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        token_v3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        token_e2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        token_e3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        is_online: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        url_gettoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_gettoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pass_gettoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Endpoist_linkufa',
        tableName: 'endpoist_linkufa',
        deletedAt: 'deleted_at',
        createdAt: "created_at",
        updatedAt: "updated_at",

    });
    return Endpoist_linkufa;
};