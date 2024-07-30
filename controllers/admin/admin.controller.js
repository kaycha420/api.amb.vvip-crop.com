var {
  Member,
  Admins,
  Accountbank,
  Setting,
  Bank,
  Askmebet,
  Transaction,
} = require("../../models");
//const Api_bet = require("../../apiall/apibetfix/apibetfix");
//const ApiNotify = require("../../apis/notify.api");
const { to, ReE, ReS, TE } = require("../../services/util.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const Agent_Askmebets = require("../../helpers/agent.helper.js");

const app = require("../../services/app.service");
const config = require("../../config/app.json")[app["env"]];
const Notification = require("../../helpers/notification.helper.js");
var moment = require("moment");
const { where } = require("sequelize");
const { orderBy } = require("lodash");
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
async function getbankNameTh(name) {
  let i = name;
  const bankNameTh = "";
  if (i == "scb") {
    bankNameTh = "ธนาคารไทยพาณิชย์";
  } else if (i == "ktb") {
    bankNameTh = "ธนาคารกรุงไทย";
  } else if (i == "baac") {
    bankNameTh = "ธนาคารธ.ก.ส";
  } else if (i == "kbank") {
    bankNameTh = "ธนาคารกสิกร";
  } else if (i == "bbl") {
    bankNameTh = "ธนาคารกรุงเทพ";
  } else if (i == "bay") {
    bankNameTh = "ธนาคารกรุงศรีอยุธยา";
  } else if (i == "ttb") {
    bankNameTh = "ธนาคารทหารไทย-ธนชาติ";
  } else if (i == "gsb") {
    bankNameTh = "ธนาคารออมสิน";
  } else if (i == "uob") {
    bankNameTh = "ธนาคารยูโอบี";
  } else if (i == "tisco") {
    bankNameTh = "ธนาคารทิสโก้";
  } else if (i == "cimb") {
    bankNameTh = "ธนาคารซีไอเอ็มบีไทย";
  } else if (i == "lhb") {
    bankNameTh = "ธนาคารแลนด์แอนด์เฮ้าส์";
  } else if (i == "truewallet") {
    bankNameTh = "ทรูมันนี่วอลเล็ท";
  }

  return bankNameTh;
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
    { expiresIn: "1d" }
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

  const dataagent = await Member.findAll({
    include: [
      {
        model: Bank,
        as: "Bank",
        required: true,
        attributes: {
          include: [],
          exclude: ["created_at", "updated_at"],
        },
      },
    ],
  });
  return ReS(res, {
    data: dataagent,
    error: "No error",
    msg: "Success",
  });
};

async function getdata_transactions_byid(id,type){

 // console.log(id)

  let getdata = await Transaction.findAll({
    include: [
      {
        model: Member,
        as: "Member",
        required: true,
        attributes: {
          include: [],
          exclude: ["created_at", "updated_at"],
        },
      },
    ],
    order: [["id", "DESC"]],
    where : {
      user_id:id,
      type_option:type
    }
  });

  return  getdata
}
// getdamember_detail
const getdamember_detail = async function (req, res) {
  if (!req.body.id) {
    return ReE(res, {
      error: "error",
      msg: `parameter "id" has invalid "undefined" value.`,
    });
  }
  const body = req.body;

  const dataagent = await Member.findOne({
    include: [
      {
        model: Bank,
        as: "Bank",
        required: true,
        attributes: {
          include: [],
          exclude: ["created_at", "updated_at"],
        },
      },
    ],
    order: [["id", "DESC"]],

    where: {
      id: body.id,
    },
  });

  let datap = {
    username: dataagent.user_agent,
  };

  let resd,transactions_deprosit_byid,transactions_wit_byid;

  [err, resd] = await to(Agent_Askmebets.getProfileAndCredit(datap));

  [err, transactions_deprosit_byid] = await to(getdata_transactions_byid(body.id,"ฝาก"));
  [err, transactions_wit_byid] = await to(getdata_transactions_byid(body.id,"ถอน"));

  //let resd = await;
  let item = resd?.data;
  
  // console.log(err, resd?.data);

  let xxx = {
    user_detail: dataagent,
    data_agent: item.data,
    data_transactions_deprosit: transactions_deprosit_byid,
    data_transactions_wit: transactions_wit_byid,
  };
  return ReS(res, {
    data: xxx,
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
    data: data,
    msg: "Success",
  });
};

// add member เพิ่มที่หลังบ้าน
const addmember_byadmin = async function (req, res) {
  const body = req.body;

  let err, user;

  [err, user] = await to(
    Member.findOne({
      where: {
        username: body.username,
      },
    })
  );
  // console.log(body);

  if (user) {
    return ReE(
      res,
      {
        msg: "มีเบอร์โทรนี้แล้ว ในระบบ.",
        status_code: 104,
      },
      200
    );
  }
  [err, user] = await to(
    Member.findOne({
      where: {
        name: body.name,
      },
    })
  );
  //  console.log("err", body);

  if (user) {
    return ReE(
      res,
      {
        msg: "มีชื่อนี้แล้ว ในระบบ.",
        status_code: 104,
      },
      200
    );
  }

  [err, user] = await to(
    Member.findOne({
      where: {
        accnum: body.accnum,
      },
    })
  );
  if (user) {
    return ReE(
      res,
      {
        msg: "มี เลขบัญชี นี้แล้ว ในระบบ.",
        status_code: 104,
      },
      200
    );
  }
  if (err) ReE(res, err, 422);

  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });

  let submember = body.username.substr(6, 5);

  let datap = {
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    prefix: Askmebets.prefix,
    domain: Askmebets.domain,
    username: Askmebets.agent + submember,
    name: body.name,
    password: body.password,
    web: Askmebets.Web,
  };

  let resd;

  [err, resd] = await to(Agent_Askmebets.create_userAgent(datap));

  //return true
  let aff = "";
  let data_aff = await Member.findOne({
    where: {
      alliance: body.aff,
    },
  });

  if (data_aff) {
    aff = data_aff.username;
  }
  //console.log(datacreate_member.data)
  let resultd = body.accnum.substr(6, 4);
  let kbankpayd = body.accnum.substr(5, 4);
  let aff_id = randomString(23);

  let comparepass = await createpasshes(body.password);
  let Banksss = await Bank.findOne({
    where: {
      bank_id: body.bank,
    },
  });

  // let bankNameTh = await getbankNameTh(body.bank);

  //await delay(2000);
  [err, user] = await to(
    Member.create({
      username: body.username,
      password: comparepass,
      line: body.line,
      accnum: body.accnum,
      bankNameTh: Banksss.bankNameTh,
      bank: Banksss.id,
      bank_id: Banksss.id,
      name: body.name,
      aff: aff,
      alliance: aff_id,
      user_agent: datap.username,
      pass_agent: datap.password,
      scbpay: resultd,
      kbankpay: kbankpayd,
      type_option: "member",
      backlist: 0,
      status_pay: 0,
      status: 1,
      create_by: req.user.name,
    })
  );
  let x = {
    username: body.username,
    user_agent: datap.username,
    // pass_agent: pass,
    line: body.line,
    accnum: body.accnum,
    bankNameTh: Banksss.bankNameTh,
    bank: body.bank,
    name: body.name,
    aff: aff,
    alliance: aff_id,
    create_by: req.user.name,
  };
  return ReS(res, {
    data: x,
    // token: token,
    // redirect: "home",
    msg: "สมัครสมาชิกใหม่ สำเร็จ..",
  });

  // let datanoti = await NotificationMessage.create({
  //   notification_title: `แจ้งเตือน สมัครสมาชิกใหม่`,
  //   notification_text: `เบอร์โทร ${body.username} ชื่อ  ${body.name} เลขบัญชี ${body.accnum}  `,
  //   type: "showadmin",
  // });

  // let message = `VVIP-CORP :👩‍🚀👩‍🚀 แจ้งเตือน สมัครสมาชิกใหม่ 👩‍🚀👩‍🚀 \n เบอร์โทร : ${body.username} \n เลขบัญชี : ${body.accnum} \n ชื่อ : ${body.name}  \n userAgent : ${dsataapi_ufa.data.data.username}  สถานะ : ✅✅ ไม่มีในระบบ Backlist `;
  // let notify = await Walllet.notify(message);
};

// getdatabank_code
const getdatabank_code = async function (req, res) {
  const body = req.body;
  let data = await Bank.findAll({});
  return ReS(res, {
    data: data,
    error: "No error",
    msg: "Success",
  });
};

// getProfileAndCredit
const checkCredit = async function (req, res) {
  const body = req.body;
};

// getAgentCredit
const getAgentCredit = async function (req, res) {
  const body = req.body;
  let resd;

  [err, resd] = await to(Agent_Askmebets.getAgentCredit({}));
  let data = resd.data;
  return ReS(res, {
    data: data.data,
    error: "No error",
    msg: "Success",
  });
};

// getAgentCredit
const addcredit = async function (req, res) {
  const body = req.body;
  let data = await Member.findOne({
    where: {
      id: body.user_id,
    },
  });

  let item = {
    username: data.user_agent,
    balance: body.credit,
  };
  let resd;
  [err, resd] = await to(Agent_Askmebets.deposit(item));
  if (err) {
    return ReE(res, {
      code: 404,
      error: "error",
      msg: "error .addcredit",
    });
  }
  let data2 = resd.data;

  let create_to = await Transaction.create(
    {
    user_id: body.user_id,
    amount: body.credit,
    ref: data2.data.refId,
    c_before: data2.data.beforeCredit,
    c_after: data2.data.afterCredit,
    status: "success",
    type_option: "ฝาก",
    addby: req.user.username,
    add_from: 'admin'
  }

);



  return ReS(res, {
    data: create_to,
    error: "No error",
    msg: "Success",
  });
};

// delCredit
const delCredit = async function (req, res) {
  const body = req.body;
  let data = await Member.findOne({
    where: {
      id: body.user_id,
    },
  });

  let item = {
    username: data.user_agent,
    balance: body.credit,
  };
  let resd;
  [err, resd] = await to(Agent_Askmebets.withdrawal(item));
  if (err) {
    return ReE(res, {
      code: 404,
      error: "error",
      msg: "error .delCredit",
    });
  }
  let data2 = resd.data;
  let create_to = await Transaction.create({
    user_id: body.user_id,
    amount: data2.data.afterCredit,
    ref: data2.data.refId,
    c_before: data2.data.beforeCredit,
    c_after: data2.data.afterCredit,
    status: "success",
    type_option: "ถอน",
    addby: req.user.username,
  });
  return ReS(res, {
    data: data2.data,
    code: 0,
    error: "No error",
    msg: "Success",
  });
};

// getTransactions
const getTransactions = async function (req, res) {
  let getdata = await Transaction.findAll({
    include: [
      {
        model: Member,
        as: "Member",
        required: true,
        attributes: {
          include: [],
          exclude: ["created_at", "updated_at"],
        },
      },
    ],
    order: [["id", "DESC"]],
  });
  return ReS(res, {
    data: getdata,
    code: 0,
    error: "No error",
    msg: "Success",
  });
};
//checkloginadmin
const chacklogin = async function (req, res) { 
  if (req.user) {
    return ReS(res, {
      code: 0,
      data: req.user,
      error: "No error",
      msg: "Success",
    });
  }
}
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
  addmember_byadmin,
  getdatabank_code,
  checkCredit,
  getAgentCredit,
  addcredit,
  delCredit,
  getTransactions,
  chacklogin
};
