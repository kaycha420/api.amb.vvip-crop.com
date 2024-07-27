'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsEvent.init({
    title_en: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title_th: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_th: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    detail_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_featured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banner_cover_img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hero_img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('News', 'Event'),
      allowNull: false
    },
    added_by: { type: DataTypes.INTEGER, allowNull: true },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'NewsEvent',
    tableName: 'news_events',
    deletedAt: 'deleted_at',
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return NewsEvent;
};