'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Admin.init({
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
       

    }, {
        sequelize,
        modelName: 'Admin',
        tableName: "admin",
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: true, //use for soft delete with using deleted_at
        underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Admin;
};