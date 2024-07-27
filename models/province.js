'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Province extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Province.init({
        country_id: {
            type: DataTypes.INTEGER,
            references: { model: "countries", key: "id" },
            onDelete: "CASCADE"
        },
        province_en: DataTypes.STRING,
        province_th: DataTypes.STRING,
        user_agent: DataTypes.STRING,
        pass_agent: DataTypes.STRING,
        official_regions: DataTypes.TEXT,
        four_regions: DataTypes.TEXT,
        status: DataTypes.BOOLEAN,
        added_by: { type: DataTypes.INTEGER, allowNull: true },
    }, {
        sequelize,
        modelName: 'Province',
        tableName: "provinces",
        deletedAt: 'deleted_at',
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: true, //use for soft delete with using deleted_at
        underscored: true //making underscored colomn as deletedAt to deleted_at
    });
    return Province;
};