var { Member, Admins, Accountbank, Setting } = require("../../models");
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

// loginadmin
const loginadmin = async function (req, res) {
  const body = req.body;

  let err, user, errs;

  [err, user] = await to(
    Admins.findOne({
      where: {
        username: body.username,
      },
    })
  );

  if (!user) {
    return ReE(
      res,
      {
        msg: "ไม่พบ USERNAME ในระบบ.",
        status_code: 104,
      },
      200
    );
  }
  [err, user] = await to(user.comparePassword(body.password));
  if (err) {
    return ReE(res, {
      msg: err.message,
      status_code: 104,
    });
  }

  let token;

  token = await jwt.sign(
    { user_id: user.id, username: user.username, user_type: "admin" },
    CONFIG.jwt_encryption,
    { expiresIn: "1h" }
  );

  let t = token;
  let u = await Admins.update(
    {
      auth_token: t,
    },
    {
      where: { username: body.username },
    }
  );

  return ReS(res, {
    user: user,
    token: t,
    msg: "! login Success",
  });
};

// cerate_useradmin
const cerate_useradmin = async function (req, res) {
  const body = req.body;

  //console.log(checkBody);
  let admin = await Admins.findOne({
    where: {
      username: body.username,
    },
  });
  //console.log(admin);
  if (admin) {
    return ReE(
      res,
      {
        msg: "มี USERNAME นี้แล้ว ในระบบ.",
        error: "error . Admin",
      },
      200
    );
  }
  let comparepass = await createpasshes(body.password);
  const datas = {
    username: body.username,
    password: comparepass,
    level_user: body.level_user,
    phone: body.phone,
    name: body.name,
    added_by: req.user.username,
  };

  let datasave = await Admins.create(datas);

  return ReS(res, {
    error: "No error",
    msg: "สมัครสมาชิกใหม่ สำเร็จ..",
  });

  // let message = `VVIP-CORP :👩‍🚀👩‍🚀 แจ้งเตือน สมัครสมาชิกใหม่ 👩‍🚀👩‍🚀 \n เบอร์โทร : ${body.username} \n เลขบัญชี : ${body.accnum} \n ชื่อ : ${body.name}  \n userAgent : ${dsataapi_ufa.data.data.username}  สถานะ : ✅✅ ไม่มีในระบบ Backlist `;
  // let notify = await Walllet.notify(message);
};

// getdata_admin
const getdata_admin = async function (req, res) {
  const body = req.body;
  let dataAdmin = await Admins.findAll({});
  return ReS(res, {
    data: dataAdmin,
    error: "No error",
    msg: "Success",
  });
};
// edit_useradmin
const edit_useradmin = async function (req, res) {
  const body = req.body;
  const datas = {
    id: body.id,
    name: body.name,
    email: body.email,
    phone: body.phone,
    admin_status: body.admin_status,
    level_user: body.level_user,
    fcm_token: body.fcm_token,
    status: body.status,
    added_by: req.user.username,
  };
  if (req.user.level_user == "admin" && body.id == req.user.id) {
    let dataAdmin2 = await Admins.update(
      {
        name: datas.name,
        email: datas.email,
        phone: datas.phone,
        admin_status: datas.admin_status,
        level_user: "admin",
        fcm_token: datas.fcm_token,
        status: datas.status,
      },
      {
        where: {
          id: datas.id,
        },
      }
    );
    return ReS(res, {
      error: "No error",
      msg: "อัพเดทข้อมูลสำเร็จ",
    });
  }
  if (req.user.level_user == "admin") {
    return ReE(res, {
      error: "No error",
      msg: "level_user = programmer หรือ superadmin เท่านั้นถึงจะสามารถแก้ไขข้อมูลผู้อื่นได้",
    });
  }
  let dataAdmin = await Admins.update(
    {
      name: datas.name,
      email: datas.email,
      phone: datas.phone,
      admin_status: datas.admin_status,
      level_user: datas.level_user,
      fcm_token: datas.fcm_token,
      status: datas.status,
      added_by: req.user.username,
    },
    {
      where: {
        id: datas.id,
      },
    }
  );

  return ReS(res, {
    error: "No error",
    msg: "แก้ไขข้อมูลสำเร็จ",
  });
};
// getdatasetting
const getdatasetting = async function (req, res) {
  const body = req.body;
  let data = await Setting.findAll({});
  return ReS(res, {
    data: data,
    error: "No error",
    msg: "Success",
  });
};
// getdata_memberall
const getdata_memberall = async function (req, res) {
  const body = req.body;
  let data = await Member.findAll({});
  return ReS(res, {
    data: data,
    error: "No error",
    msg: "Success",
  });
};
// getdamember_detail
const getdamember_detail = async function (req, res) {
  const body = req.body;
  let data = await Member.findOne({
    where: {
      id: body.id,
    },
  });
  return ReS(res, {
    data: data,
    error: "No error",
    msg: "Success",
  });
};
//add_bankdeposit
const add_bankdeposit = async function (req, res) {
  const body = req.body;
  //console.log(body)
  const datas = {
    accnum: body.accnum,
    name_accnum: body.name_accnum,
    username: body.username,
    password: body.password,
    from_b: body.from_b,
    option_b: body.option_b,
    level: body.level,
    name_bank: body.name_bank,
  };

  let datasave = await Accountbank.create(datas);
  return ReS(res, {
    error: "No error",
    msg: "เพิ่มบัญชีธนาคารสำเร็จ",
  });
};
//getdata_bankdeposit
const getdata_bankdeposit = async function (req, res) {
  const body = req.body;
  let data = await Accountbank.findAll();
  console.log(body);
  return ReS(res, {
    error: "No error",
    data:data,
    msg: "Success",
  });
};
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
  cerate_useradmin,
  loginadmin,
  getdata_admin,
  edit_useradmin,
  getdatasetting,
  getdata_memberall,
  getdamember_detail,
  add_bankdeposit,
  getdata_bankdeposit,
};
