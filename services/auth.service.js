const jwt = require("jsonwebtoken");
const { Op, Model } = require("sequelize");

const CONFIG = require("../config/config.json");
const { User, VerificationOtp ,Member} = require("../models");
const validator = require("validator");
const { to, TE, ReE } = require("../services/util.service");
const helper = require("../helpers/custom.helper");

const createUser = async (userInfo) => {
  let auth_info, err;

  auth_info = {};
  auth_info.status = "create";

  let user;


    auth_info.method = "username";

    [err, user] = await to(
      Member.findOne({
        where: {
          username: userInfo.username,
        },
      })
    );

   

    if (user) {
      return TE("Avatar name has already been taken.");
    }

  [err, user] = await to(Member.create(userInfo));
  if (err) TE("Email has already been taken.");

  return { data: null, message: "Registration success" };
};

module.exports.createUser = createUser;

const authUser = async function (userInfo) {
  //returns token
  let auth_info = {};
  let user;
  let verifiedUserOtpCount;
  let otpRes;
  let isUserOtpExist;
  auth_info.status = "login";

  [err, user] = await to(
    Member.findOne({
      where: {
        username: userInfo.username,
        // user_status: {
        //     [Op.eq]: 1
        // }
      },
    })
  );

  if (!user) TE("Please enter the registered email address.");

  [err, user] = await to(user.comparePassword(userInfo.password));

  if (err) TE(err.message);

  return user;

};

module.exports.authUser = authUser;