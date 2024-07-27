'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting_webfontend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting_webfontend.init({
    loggo_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      loggo2_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      loggo3_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      name_web: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      line_support: {
        type: DataTypes.STRING,
        allowNull: true
      },
      line_support2: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      bg_treem: {
        type: DataTypes.STRING,
        allowNull: true
      },
      content_img1: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content_img2: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content_img3: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content_img4: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content_img5: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      ogUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },


      ogTitle: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      ogimage: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      ogDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      shortlink: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      favicon: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      titles: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      canonicalhref: {
        type: DataTypes.TEXT,
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
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Setting_webfontend',
    tableName: 'setting_webfontend',
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    

  });
  return Setting_webfontend;
};