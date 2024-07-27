'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactSupport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactSupport.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contact_reason_id: {
      type: DataTypes.INTEGER,
      
      allowNull: false,
    },
    description_en: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_th: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Pending','Valid', 'Not-Valid'),
      allowNull: false
    },
    added_by: { type: DataTypes.STRING, allowNull: true },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'ContactSupport',
    tableName: 'contact_supports',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
  
  });
  return ContactSupport;
};