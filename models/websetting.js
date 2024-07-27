"use strict";

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require("../services/util.service");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Websetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Websetting.init(
    {
      logo_pc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo_phone: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo_icon: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo_admin : {
        type: DataTypes.TEXT,
        allowNull: true
      },
      name_web: {
        type: DataTypes.STRING,
        allowNull: true
      },
      url_web: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      url_beat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link_downloadapp: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      link_downloadall: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status_server: {
        allowNull: true,
        type: DataTypes.ENUM(['running', 'event_time', 'stop', 'maintenance', 'maintenance_date',]),
      },
      status_game: {
        allowNull: true,
        type: DataTypes.ENUM(['running', 'event_time', 'stop', 'maintenance', 'maintenance_date',]),
      }
      ,
      MessageEvent: {
        allowNull: true,
        type: DataTypes.TEXT
      }
      ,
      Message_notify: {
        allowNull: true,
        type: DataTypes.TEXT
      },
    },
    {
      sequelize,
      modelName: "Websetting",
      tableName: "websetting",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Websetting;
};
