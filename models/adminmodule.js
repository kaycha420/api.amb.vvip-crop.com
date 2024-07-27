'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AdminModule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AdminModule.init({
        parent_id: {
            type: DataTypes.INTEGER,
            // references: { model: "admin_modules", key: "id" },
            defaultValue: "0"
        },
        name: {
            type: DataTypes.STRING
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        route: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_dropdown: {
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false

        },
        is_readonly: {
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'AdminModule',
        tableName: 'admin_modules',
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    AdminModule.hasMany(AdminModule, { as: 'childrens', foreignKey: 'parent_id', sourceKey: 'id' });
    return AdminModule;
};