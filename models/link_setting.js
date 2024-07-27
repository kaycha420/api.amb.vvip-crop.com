'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Link_setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Link_setting.init({
        game_serve: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        host: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        port: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        node: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: true
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: true
        },

    }, {
        sequelize,
        modelName: 'Link_setting',
        tableName: "link_setting",
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: true, //use for soft delete with using deleted_at
        underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Link_setting;
};