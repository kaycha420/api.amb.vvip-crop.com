// const jwt = require("jsonwebtoken");
// const CONFIG = require("../config/config.json");
// const APP = require("../config/app.json");
// const Walllet = require("../apis/wallet.api");
// const sgMail = require("@sendgrid/mail");
// const { Adminlogin, VerificationOtp, Post, Follower, Friendship, Clan, ClanMember, Game, Team, BonusAmount,Game_c,  Log_serverall,
//   Agent_ufa,NotificationMessage } = require("../models");
// const { to, TE, ReE } = require("../services/util.service");
// const { Op } = require("sequelize");
// const walletHelper = require("./wallet.helper");
// var moment = require("moment");
// require("moment/locale/th");
// //Test send grid API Key
// // const sendgridAPIKey = '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';
// const sendgridAPIKey = APP.development.SENDGRID_API_KEY;

// sgMail.setApiKey(sendgridAPIKey);

// const sendOTPEmail = (email, subject, emailTemplate) => {
//   sgMail.send({
//     to: email,
//     from: APP.development.SENDGRID_EMAIL_ID,
//     subject: subject,
//     //text: `Hello ${uname},  ${otp} this is OTP please enter and login`,
//     html: emailTemplate
//   });
// };

// const sendForgotPasswordLinkEmail = (email, uname, link, emailTemplate) => {
//   sgMail.send({
//     to: email,
//     from: APP.development.SENDGRID_EMAIL_ID,
//     subject: "Reset Password",
//     //text: `Hello ${uname},  ${link} this is link for reset your password`,
//     html: emailTemplate
//   });
// };

// const betweenRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const verifyOtp = async (otpInfo) => {
//   let user, err;

//   if (otpInfo.otp != "") {

//     user = await Adminlogin.findOne({
       
//         where: { id : otpInfo.user_id },
//       });
//      let userss = await VerificationOtp.findOne({
       
//         where: { user_id : otpInfo.user_id },
//       });


//      console.log(userss)

//     const otpData = userss;

//     if (otpData.otp == otpInfo.otp) {
//       user.VerificationOtp = undefined;

//       [err, resArr] = await to(
//         VerificationOtp.update(
//           {
//             is_verified: true,
//             is_firebase_verified: true
//           },
//           {
//             where: {
//               user_id: user.id,
//               otp_type: "Login"
//             },
//           }
//         )
//       );

//       token = await jwt.sign(
//         { user_id: user.id, email: user.email, user_type: 'admin' },
//         CONFIG.jwt_encryption,
//         { expiresIn: "8h" }
//       );

     
//       let d = new Date()
      
//       let ruser = await Adminlogin.findOne({ where: { id: user.id } })



//       await Adminlogin.update({
//           auth_token: token,
//           updated_at:moment(d).add(+7, "hour").format(),
//            fcm_token:otpInfo.user_device_id 
       
//       }, {
//         where: { id: user.id }
//       })



//       await Log_serverall.create(
//         {
//           username: ruser.email,
//           username_level: ruser.level_user,
//           insert_date: moment(d).add(+7, "hour").format(),
//           devies_pc: ruser.fcm_token,
//           ip_login: ruser.fcm_token,
//           created_at:moment(d).add(+7, "hour").format(),
//           updated_at:moment(d).add(+7, "hour").format(),
//           // is_online: 1,
//           // fcm_token:body.user_device_id 
//         }
//       );



//       let datanoti = await NotificationMessage.create({
//         notification_title: `แจ้งเตือน เข้าสู่ระบบ ${ruser.level_user}`,
//         notification_text: `ชื่อ  ${ruser.name} เวลา ${moment(d).format("LTS")}  `,
//         type: "showadmin",
//       });

//       let message = `VVIP-CORP  แจ้งเตือน เข้าสู่ระบบ \n ชื่อ : ${ruser.name} \n เวลา ${moment(d).format("LTS")} \n user_device_id : ${ruser.fcm_token}  `;
//       let notify = await Walllet.notify(message);


//       return { 
       
//         user: ruser,
       
       
//         token: token, 
//         message: "OTP Verified" 
//       };
//     } else {
//       return TE("Invalid OTP.");
//     }
//   } else {data
//     return TE("Invalid OTP.");
//   }
// };


// const getUserDetailsByUserID = async (id) => {
//   var err,user;
//   [err, user] = await to(Adminlogin.findOne({
//     attributes: {
//         include: ['level'],
//         exclude: ['added_by', 'deleted_at', 'created_at', 'updated_at']
//     },
//     where: {
//         id: id,
//     }
//   })) ;

//   if (err) TE("Something went wrong.");
//   // const level = user.level;
//   return user
// }


// const getGameDetailsByGameID = async (id) => {
//   var err,game;
//   [err, game] = await to(Game.findOne({
//     attributes: {
//       include: ['name_en', 'name_th', 'number_of_participant','number_of_participant_per_team'],
//       exclude: ['description_en','description_th', 'game_image_url', 'cover_image_url', 'game_website', 
//               'is_available', 'is_active', 'added_by', 'deleted_at', 'created_at', 'updated_at']
//     },
//     where: {
//         id: id,
//         is_available: true
//     }
//   })) ;

//   if (err) TE("Something went wrong.");
//   // const level = game.level;
//   return game
// }
// const getGameDetailsByGameID_c = async (id) => {
//   var err,game;
//   [err, game] = await to(Game_c.findOne({
//     attributes: {
//       include: ['name_en', 'name_th', 'number_of_participant','number_of_participant_per_team'],
//       exclude: ['description_en','description_th', 'game_image_url', 'cover_image_url', 'game_website', 
//               'is_available', 'is_active', 'added_by', 'deleted_at', 'created_at', 'updated_at']
//     },
//     where: {
//         id: id,
//         is_available: true
//     }
//   })) ;

//   if (err) TE("Something went wrong.");
//   // const level = game.level;
//   return game
// }

// const getTeamDetailsByTeamIdAndGameId = async (id,game_id) => {
//   var err,team;
//   [err, team] = await to(Team.findOne({
//     attributes: {
//       include: [],
//       exclude: ['added_by', 'deleted_at', 'created_at', 'updated_at']
//     },
//     where: {
//         id: id,
//         game_id:game_id
//     }
//   })) ;

//   if (err) TE("Something went wrong.");

//   return team
// }

// const base64Encode= async (value) => {
//   let base64 = '';
//   if(value){
//     base64 = Buffer.from(`${value}`).toString('base64');
//   }
//   return base64;
// }

// const base64Decode = async (value) => {
//   return Buffer.from(value, 'base64').toString('ascii');
// }

// const generateBonusAmount = async () => {
//   const bonusAmounts = await BonusAmount.findAll({
//     attributes:[
//         'bonus_amount'
//     ]
//   });
//   const randAmount = bonusAmounts[(Math.random() * bonusAmounts.length) | 0];
//   return randAmount.bonus_amount;
// }
// module.exports = {
//   sendOTPEmail,
//   sendForgotPasswordLinkEmail,
//   betweenRandomNumber,
//   verifyOtp,
//   getUserDetailsByUserID,
//   getGameDetailsByGameID,
//   getTeamDetailsByTeamIdAndGameId,
//   base64Encode,
//   base64Decode,
//   generateBonusAmount,
//   getGameDetailsByGameID_c
// };
