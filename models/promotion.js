'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Promotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Promotion.init({
        percen: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true
        },
        exprice: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name_pro: {
            type: DataTypes.STRING,
            allowNull: true
        },
        limit_d: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        limit_w: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        
        img_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status_online: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bank_dispodit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        level_pro: {
            type: DataTypes.ENUM(['สมัครใหม่', 'สมาชิกเก่า','นาทีทอง','กงล้อ','แจกฟรี', ]),
            allowNull: true,

        },  
        status_showpro: {
            type: DataTypes.ENUM(['แสดงหน้าเว็บ', 'ไม่แสดงหน้าเว็บ','แสดงหน้าเว็บ+ปุ่มกดรับเครดิต' ]),
            allowNull: true,

        },
        
        status_add: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
    }, {
        sequelize,
        modelName: 'Promotion',
        tableName: "promotion",
        deletedAt: 'deleted_at',
        createdAt: "created_at",
        updatedAt: "updated_at",
        //paranoid: true, //use for soft delete with using deleted_at
        // underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Promotion;
};