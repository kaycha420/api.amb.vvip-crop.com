var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
  Server_apiscb,
  Request_allscb,
} = require("../../../models");
const axios = require("axios");
const { to, ReE, ReS, TE } = require("../../../services/util.service");
const app = require("../../../services/app.service");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");
const Apiscb_helper = require("../../../helpers/Apiscb.helper.js");
const deposit_helper = require("../../../helpers/deposit_new.helper.js");
var md5 = require("md5");
const urlendpoint = "http://servermax.3bbddns.com:1337";
var moment = require("moment");

async function logInScbv1(params) {
  let datakey = await Apiscb_helper.getDatakey();

  let data = JSON.stringify({
    pin: params.pin,
    deviceId: params.deviceId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: urlendpoint + "/api/v10/scb/loginauth",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${datakey.data.data.token}`,
    },
    data: data,
  };

  return await axios.request(config);
}

async function login_authv1(params) {
  let getdatalogin = await logInScbv1(params);

  return getdatalogin.data;
}

const add_bankdeposit_chackconnect = async function (req, res) {
  let body = req.body;

  const bodypost = {
    pin: body.password,
    deviceId: body.username,
  };

  let err, user, errs;

  [err, user] = await to(Apiscb_helper.chack_deviebank_bybankfrom(bodypost));

  if (err) {
    return ReE(res, {
      // data: user.data.data,
      // auth: user.data.auth,
      error: "Server error",
      msg: "Server error",
    });
  }
  // console.log(err)
  //console.log(user.data.data)
  // let datalog = await login_authv1(bodypost)
  return ReS(res, {
    data: user.data.data,
    //auth: user.data.auth,
    // error: "No error",
    msg: "Success",
  });
};

const chack_connect_login_auth_bank = async function (req, res) {
  let databank = await Accountbanks.findOne({
    where: {
      id: req.body.id,
    },
  });

  const bodypost = {
    pin: databank.password,
    deviceId: databank.username,
  };

  let err, user, errs, users;
  [err, user] = await to(login_authv1(bodypost));

  // console.log(user.data)
  if (err) {
    return ReE(res, {
      error: "Server error",
      msg: "Server error",
    });
  }
  [err, users] = await to(
    Accountbanks.update(
      {
        status_connact: 1,
        status_scb: 1,
        text_data: user.data.auth,
      },
      {
        where: { id: req.body.id },
      }
    )
  );
  if (err) {
    return ReE(res, {
      error: "Server error",
      msg: "Server error",
    });
  }
  return ReS(res, {
    data: user.data.data,
    auth: user.data.auth,
    // error: "No error",
    msg: "Success",
  });
};
const login_auth = async function (req, res) {
  let databank = await Accountbanks.findOne({
    where: {
      id: req.body.id,
    },
  });

  const bodypost = {
    pin: databank.password,
    deviceId: databank.username,
  };

  let err, user, errs;

  [err, user] = await to(login_authv1(bodypost));

  // console.log(user.data)

  if (err) {
    return ReE(res, {
      error: "Server error",
      msg: "Server error",
    });
  }

  //
  //console.log(user.data.data)
  // let datalog = await login_authv1(bodypost)
  return ReS(res, {
    data: user.data.data,
    auth: user.data.auth,
    // error: "No error",
    msg: "Success",
  });
};

async function sreat(str) {
  let d = await Request_allscb.findOne({
    where: {
      description: str,
    },
  });
  return d;
}

async function saveDatahit(params) {
  let datachack = await Apiscb_helper.chacktranhit(params);

  function splitStr(str) {
    // Function to split string
    var string = str.split(" ");

    return string;
  }

  function conRes(res) {
    return Object.values(JSON.parse(JSON.stringify(res)));
  }

  if (datachack.data.data.data.data.txnList.length <= 0) {
    return false;
  }
  for (const rr of conRes(datachack.data.data.data.data.txnList)) {
    if (rr.txnCode.description == "ฝากเงิน") {
      let datatext1 = splitStr(rr.txnRemark);

      let number = "";
      let names = "";

      if (datatext1[1] == "SCB") {
        number = datatext1[2].replace(/x/g, "");
        names = `${datatext1[4]} ${datatext1[5]}`;
      } else {
        let number1 = datatext1[2].replace(/X/g, "");
        number = number1.replace("/", "");
      }
      // console.log(names);

      let dis = md5(rr.txnRemark + rr.txnDateTime + rr.txnAmount);
      let datasave = {
        description: dis,
        date_creat: moment(rr.txnDateTime).format(),
        time_creat: moment(rr.txnDateTime).format("LTS"),
        amount: rr.txnAmount,
        name_to: names,
        accnum: number,
        status_pay: 3,
        to_bank: datatext1[1],
        statsu: rr.txnCode.description,
        fron_bank: params.accountNo,
      };

      let datafull = await sreat(dis);
      // console.log(datafull)
      if (!datafull) {
        let saves = await Request_allscb.create(datasave);
        //notifition(datasave);
      }

      return true;
    }
  }
}

const deposit_auto = async function (req, res) {
  const startDate = new Date(moment().startOf("day").format("YYYY-MM-DD"));
  const endDate = new Date(moment().endOf("day").format("YYYY-MM-DD"));
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let databank = await Accountbanks.findOne({
    where: {
      option_b: "ฝาก",
      status_scb: 1,
      level: "1",
    },
  });

  if (!databank) {
    return ReE(res, {
      error: "Server error",
      msg: "ไม่มีบัญชี ฝากเงิน หรือ ตรวจสอบ สเตตัสของบัญชี",
    });
  }

  const bodypost = {
    accountNo: databank.accnum,
    auth: databank.text_data,
  };

  let datachachlogin = await Apiscb_helper.chackloginauth(bodypost);

  //console.log(datachachlogin.data)

  if (datachachlogin.data.success == false) {
    const bodypost = {
      pin: databank.password,
      deviceId: databank.username,
    };

    let err, user, errs, users, chacktran;

    [err, user] = await to(login_authv1(bodypost));

    [err, users] = await to(
      Accountbanks.update(
        {
          status_connact: 1,
          status_scb: 1,
          text_data: user.data.auth,
        },
        {
          where: { id: req.body.id },
        }
      )
    );

    const datachackhit = {
      accountNo: databank.accnum,
      auth: user.data.auth,
      startdate: formatDate(startDate),
      enddate: formatDate(endDate),
    };

    let datahit = await saveDatahit(datachackhit);
    let datadep = await deposit_helper.chack_Deposit()
    return ReS(res, {
      error: "success",
      data: datahit,
      msg: "success",
    });
    // console.log(datahit.data);
  } else if (datachachlogin.data.success == true) {
    const datachackhit = {
      accountNo: databank.accnum,
      auth: databank.text_data,
      startdate: formatDate(startDate),
      enddate: formatDate(endDate),
    };

    let datahit = await saveDatahit(datachackhit);


    let datadep = await deposit_helper.chack_Deposit()

    return ReS(res, {
      error: "success",
      data: datahit,
      msg: "success",
    });
    // console.log(datahit.data);
  }

  // console.log(datachachlogin.data)
};

module.exports = {
  login_auth,
  add_bankdeposit_chackconnect,
  chack_connect_login_auth_bank,
  deposit_auto,
};
