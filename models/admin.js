"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Admin.init({
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true
      },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profile_photo: {
            type: DataTypes.STRING
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        admin_status: {
            type: DataTypes.TINYINT(1),
            defaultValue: 1,
            allowNull: false
        },
        auth_token: DataTypes.TEXT,
        
        added_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        level_user: {
            type: DataTypes.ENUM(['member', 'admin', 'programmer', 'superadmin']),
            allowNull: true,

        },
        fcm_token: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        
        status: {
            allowNull: true,
            type: DataTypes.STRING,
            defaultValue: 1,
        },
        deleted_at: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: "Admin",
        tableName: "admin",
    },);


    Admin.prototype.comparePassword = async function (pw) {
        let err, pass;
        if (!this.password) TE("password not set");
    
        [err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if (err) TE(err);
    
        if (!pass) TE("invalid password");
    
        return this;
      };

    return Admin;
};