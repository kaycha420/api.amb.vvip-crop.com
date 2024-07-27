"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      line: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      level_user: {
        type: DataTypes.ENUM(["member", "admin", "programmer", "superadmin"]),
        allowNull: true,
      },
      type_option: {
        type: DataTypes.ENUM(["member", "admin"]),
        allowNull: true,
      },
      user_ufa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pass_ufa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      first_dep: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankNameTh: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      aff: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastupdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      promotion_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      backlist: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      aff_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alliance: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ref: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      scbpay: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kbankpay: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      partner: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      bonus_aff: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      bonus_wl: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      bonus_wl: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
        allowNull: true,
      },
      bonus_wl: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      wl_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      avata_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      status_pay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      // ticket: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },

      create_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      edit_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Member",
      tableName: "member",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      //paranoid: true, //use for soft delete with using deleted_at
      // underscored: true //making underscored colomn as deletedAt to deleted_at
    }
  );

  Member.prototype.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE("password not set");

    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE("invalid password");

    return this;
  };
  return Member;
};
