var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
  Server_apiscb
} = require("../../../models");
const axios = require("axios");
const { to, ReE, ReS, TE } = require("../../../services/util.service");
const app = require("../../../services/app.service");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");
const Apiscb_helper = require("../../../helpers/Apiscb.helper.js");

const urlendpoint = "http://servermax.3bbddns.com:1337";

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
        status_scb:1,
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



const deposit_auto = async function (req, res) {

  let databank = await Accountbanks.findOne({
    where: {
      option_b: "ฝาก",
      status_scb:1,
      level:"1"
    },
  });


  if(!databank){
    return ReE(res, {
      error: "Server error",
      msg: "ไม่มีบัญชี ฝากเงิน หรือ ตรวจสอบ สเตตัสของบัญชี",
    });
  }


   const bodypost = {
    accountNo: databank.accnum,
    auth: databank.text_data,
  };

  let datachachlogin = await Apiscb_helper.chackloginauth(bodypost)


  

  if(datachachlogin.data.success == false){

    const bodypost = {
      pin: databank.password,
      deviceId: databank.username,
    };
  
    let err, user, errs,users;
  
    [err, user] = await to(login_authv1(bodypost));

    [err, users] = await to(
      Accountbanks.update(
        {
          status_connact: 1,
          status_scb:1,
          text_data: user.data.auth,
        },
        {
          where: { id: req.body.id },
        }
      )
    );

    return ReS(res, {
      data: user.data,
      // error: "No error",
      msg: "Success",
    });
  

  }

 

 // console.log(datachachlogin.data)


}


module.exports = {
  login_auth,
  add_bankdeposit_chackconnect,
  chack_connect_login_auth_bank,
  deposit_auto,
};
