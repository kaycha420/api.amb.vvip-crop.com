// "use strict";

// const Buffer = require("buffer").Buffer;
// const path = require("path");
// const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const CONFIG = require("../config/config.json");
// const APP = require("../config/app.json");
// const Walllet = require("../apis/wallet.api");
// const sgMail = require("@sendgrid/mail");
// const {
//   Adminlogin,
//   VerificationOtp,
//   Post,
//   Follower,
//   Friendship,
//   Clan,
//   ClanMember,
//   Game,
//   Team,
//   BonusAmount,
//   Game_c,
//   Askmebet,
//   Agent_ufa,
//   NotificationMessage,
// } = require("../models");
// const { to, TE, ReE } = require("../services/util.service");
// const { Op } = require("sequelize");
// const walletHelper = require("./wallet.helper");
// var moment = require("moment");
// require("moment/locale/th");

// const Agent_Askmebets = require("../apiall/apiamb/agent_api");

// const getdata_agent = async (type, user_id) => {
//   const Askmebetzs = await Askmebet.findOne({    where: {
//     status_run: 1,
//   } 
//   });
//   // Askmebet.findOne({
//   //   where: {
//   //     status_run: 1,
//   //   }
//   // });
//   //  console.log(Askmebetzs)
  
//   return Askmebetzs;
// };

// const chack_Credit_Agent = async function (req, res) {};

// const getdata_Get_Credit_Agent = async function (req, res) {
//   const Askmebets = await Askmebet.findOne({
//     where: {
//       status_run: 1,
//     },
//   });

//   if (!Askmebets) {
//     return { msg: "ไม่มีการเชื่อมต่อ Agent" };
//   }

//   let datap = {
//     agentUsername: Askmebets.agent,
//     key: Askmebets.key_agent,
//     prefix: Askmebets.prefix,
//     domain: Askmebets.domain,

//     web: Askmebets.Web,
//   };

//   //console.log(datap);

//   let dataaget = await Agent_Askmebets.Get_Credit_Agent(datap);

//   console.log(dataaget);
//   //   //console.log(dataaget)
//   // if (!dataaget) {
//   //   return ReE(res, { msg: "ไม่มีการเชื่อมต่อ Agent" }, 200);
//   // }

//   return dataaget;
// };

// module.exports = {
//   getdata_agent,
//   chack_Credit_Agent,
//   getdata_Get_Credit_Agent,
// };
