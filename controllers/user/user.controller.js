var { Member } = require("../../models");
//const Api_bet = require("../../apiall/apibetfix/apibetfix");
//const ApiNotify = require("../../apis/notify.api");
const { to, ReE, ReS, TE } = require("../../services/util.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const app = require("../../services/app.service");
const config = require("../../config/app.json")[app["env"]];
const Notification = require("../../helpers/notification.helper.js");
var moment = require("moment");
require("moment/locale/th");

async function createpasshes(pw) {
  let salt, hash;
  [err, salt] = await to(bcrypt.genSalt(10));
  if (err) TE(err.message, true);

  [err, hash] = await to(bcrypt.hash(pw, salt));
  if (err) TE(err.message, true);

  let pwhash = hash;

  return pwhash;
}

// สมัครหน้าเว็ป
const register = async function (req, res) {
  const body = req.body;
  console.log(body);

  // let err, user, errs;

  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       username: body.username,
  //     },
  //   })
  // );

  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       message: "มีเบอร์โทรนี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }
  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       name: body.name,
  //     },
  //   })
  // );
  // //  console.log("err", body);

  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       message: "มีชื่อนี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }

  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       accnum: body.accnum,
  //     },
  //   })
  // );
  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       message: "มี เลขบัญชี นี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }
  // if (err) ReE(res, err, 422);

  // let pass = randomString(10);
  // let usersss = randomString(5);

  // let data = {
  //   username: usersss,
  //   password: pass,
  // };
  // let dsataapi_ufa;

  // [err, dsataapi_ufa] = await to(Api_bet.create_user(data));

  // var data_d = dsataapi_ufa?.data;
  // console.log(data_d)
  // if (!data_d?.data?.username) {
  //   return ReE(
  //     res,
  //     {
  //       message: "เกิดข้อผิดพลาดเซิร์ฟเวอร์ภายใน",
  //       status_code: 500,
  //     },
  //     200
  //   );
  // }

  // let userss;

  // [errs, userss] = await to(
  //   Partner.findOne({
  //     where: {
  //       partner_ref: body.partner,
  //     },
  //   })
  // );

  // if (!userss) {
  //   userss = "server";
  // }
  // if (userss) {
  //   userss = userss.username;
  // }

  // let aff = "";
  // let data_aff = await Member.findOne({
  //   where: {
  //     alliance: body.aff,
  //   },
  // });

  // if (data_aff) {
  //   aff = data_aff.username;
  // }
  // //console.log(datacreate_member.data)
  // let resultd = body.accnum.substr(6, 4);
  // let kbankpayd = body.accnum.substr(5, 4);
  // let aff_id = randomString(23);

  // let comparepass = await createpasshes(body.password);

  // //await delay(2000);
  // [err, user] = await to(
  //   Member.create({
  //     username: body.username,
  //     password2: body.password,
  //     password: comparepass,
  //     line: body.line,
  //     accnum: body.accnum,
  //     bank: body.bank,
  //     bankNameTh: body.bankNameTh,
  //     name: body.name,
  //     aff: aff,
  //     alliance: aff_id,
  //     user_ufa: data_d?.data?.username,
  //     pass_ufa: pass,
  //     scbpay: resultd,
  //     kbankpay: kbankpayd,
  //     type_option: "member",
  //     backlist: 0,
  //     status: 1,
  //     status_pay: 0,
  //     first_dep: 0,
  //     partner: userss,
  //   })
  // );

  // let datanoti = await NotificationMessage.create({
  //   notification_title: `แจ้งเตือน สมัครสมาชิกใหม่`,
  //   notification_text: `เบอร์โทร ${body.username} ชื่อ  ${body.name} เลขบัญชี ${body.accnum}  `,
  //   type: "showadmin",
  // });

  // let message = `VVIP-CORP :👩‍🚀👩‍🚀 แจ้งเตือน สมัครสมาชิกใหม่ 👩‍🚀👩‍🚀 \n เบอร์โทร : ${body.username} \n เลขบัญชี : ${body.accnum} \n ชื่อ : ${body.name}  \n userAgent : ${data_d?.data?.username}  สถานะ : ✅✅ ไม่มีในระบบ Backlist `;
  // let notify = await ApiNotify.notify(message);

  // let token;
  // let otp;

  // token = await jwt.sign(
  //   { user_id: user.id, username: user.username, user_type: "enduser" },
  //   CONFIG.jwt_encryption,
  //   { expiresIn: "1h" }
  // );

  // await Member.update(
  //   {
  //     token: token,
  //   },
  //   {
  //     where: { username: body.username },
  //   }
  // );

  // //let ruser = await Member.findOne({ where: { username: body.username } });
  // let x = {
  //   username: body.username,
  //   // user_ufa: data_d?.data?.username,
  //   // line: body.line,
  //   // accnum: body.accnum,
  //   // bankNameTh: body.bankNameTh,
  //   // bank: body.bank,
  //   // name: body.name,
  //   // aff: aff,
  //   // type_option: "member",
  //   // alliance: aff_id,
  // };
  // return ReS(res, {
  //   user: x,
  //   token: token,
  //   message: "Registration success",
  // });
};

// Admin เพิ่มที่หลังบ้าน
const create_register = async function (req, res) {
  const body = req.body;

  // let err, user;

  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       username: body.username,
  //     },
  //   })
  // );
  // // console.log(body);

  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       msg: "มีเบอร์โทรนี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }
  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       name: body.name,
  //     },
  //   })
  // );
  // //  console.log("err", body);

  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       msg: "มีชื่อนี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }

  // [err, user] = await to(
  //   Member.findOne({
  //     where: {
  //       accnum: body.accnum,
  //     },
  //   })
  // );
  // if (user) {
  //   return ReE(
  //     res,
  //     {
  //       msg: "มี เลขบัญชี นี้แล้ว ในระบบ.",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }
  // if (err) ReE(res, err, 422);

  // let pass = randomString(10);
  // let userss = randomString(5);

  // let data = {
  //   username: userss,
  //   password: pass,
  // };
  // let dsataapi_ufa;

  // [err, dsataapi_ufa] = await to(Api_bet.create_user(data));

  // var data_d = dsataapi_ufa?.data;

  // //console.log(data_d?.data?.username);

  // if (!data_d?.data?.data?.username) {
  //   return ReE(
  //     res,
  //     {
  //       msg: "เกิดข้อผิดพลาดเซิร์ฟเวอร์ภายใน",
  //       status_code: 104,
  //     },
  //     200
  //   );
  // }

  // let aff = "";
  // let data_aff = await Member.findOne({
  //   where: {
  //     alliance: body.aff,
  //   },
  // });

  // if (data_aff) {
  //   aff = data_aff.username;
  // }
  // //console.log(datacreate_member.data)
  // let resultd = body.accnum.substr(6, 4);
  // let kbankpayd = body.accnum.substr(5, 4);
  // let aff_id = randomString(23);

  // let comparepass = await createpasshes(body.password);

  // //await delay(2000);
  // [err, user] = await to(
  //   Member.create({
  //     username: body.username,
  //     password: comparepass,
  //     password2: body.password,
  //     line: body.line,
  //     accnum: body.accnum,
  //     bankNameTh: body.bankNameTh,
  //     bank: body.bank,
  //     name: body.name,
  //     aff: aff,
  //     alliance: aff_id,
  //     user_ufa: data_d?.data?.username,
  //     pass_ufa: pass,
  //     scbpay: resultd,
  //     kbankpay: kbankpayd,
  //     type_option: "member",
  //     backlist: 0,
  //     status_pay: 0,
  //     first_dep: 0,
  //     status: 1,
  //     create_by: req.user.name,
  //   })
  // );

  // let x = {
  //   username: body.username,
  //   user_ufa: data_d?.data?.data?.username,
  //   pass_ufa: pass,
  //   line: body.line,
  //   accnum: body.accnum,
  //   bankNameTh: body.bankNameTh,
  //   bank: body.bank,
  //   name: body.name,
  //   aff: aff,
  //   alliance: aff_id,
  //   create_by: req.user.name,
  // };
  // return ReS(res, {
  //   data: x,
  //   // token: token,
  //   // redirect: "home",
  //   msg: "สมัครสมาชิกใหม่ สำเร็จ..",
  // });

  // let datanoti = await NotificationMessage.create({
  //   notification_title: `แจ้งเตือน สมัครสมาชิกใหม่`,
  //   notification_text: `เบอร์โทร ${body.username} ชื่อ  ${body.name} เลขบัญชี ${body.accnum}  `,
  //   type: "showadmin",
  // });

  // let message = `VVIP-CORP :👩‍🚀👩‍🚀 แจ้งเตือน สมัครสมาชิกใหม่ 👩‍🚀👩‍🚀 \n เบอร์โทร : ${body.username} \n เลขบัญชี : ${body.accnum} \n ชื่อ : ${body.name}  \n userAgent : ${dsataapi_ufa.data.data.username}  สถานะ : ✅✅ ไม่มีในระบบ Backlist `;
  // let notify = await Walllet.notify(message);
};
const loginmember = async function (req, res) {
  const body = req.body;
  const now = new Date();
 

  //console.log(users)
  let err, users, errs;

  [err, users] = await to(
    Member.findOne({
      where: {
        username: body.username,
        status: 1,
      },
    })
  );

  if (!users) {
    return ReE(
      res,
      {
        msg: "ไม่พบ USERNAME ในระบบ.",
        status_code: 104,
      },
      200
    );
  }
  [err, users] = await to(users.comparePassword(body.password));
  if (err) {
    return ReE(res, {
      msg: err.message,
      status_code: 104,
    });
  }
  //console.log(moment().format("lll"))
  if (users) {
    let token;

    if (users) {
      token = await jwt.sign(
        {
          user_id: users.id,
          username: users.username,
          user_type: "enduser",
          // user_device_id: body.user_device_id,
        },
        CONFIG.jwt_encryption,
        { expiresIn: "1d" }
      );

      let ee = await Member.update(
        {
          token: token,
          lastupdate: now,
          ip: body.ip,
        },
        {
          where: { username: body.username },
        }
      );

      let ruser = await Member.findOne({ where: { id: users.id } });
      let datauser = {
        username: ruser.username,
        bank: ruser.bank,
        name: ruser.name,
        accnum: ruser.accnum,
        user_agent: ruser.user_agent,
        id: ruser.id,
        token: ruser.token,
      };
      let user_id = users.id;

      return ReS(res, {
        user: datauser,
        token: token,
        redirect: "home",
        message: "เข้าสู่ระบบ สำเร็จ........",
      });
    }
  }
 // console.log(ee);
}; // END login member
function randomString(len, charSet) {
  charSet = charSet || "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

module.exports = {
  register,
  create_register,
  loginmember,
};
