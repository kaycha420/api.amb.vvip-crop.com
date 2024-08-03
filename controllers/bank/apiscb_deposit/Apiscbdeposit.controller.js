var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
} = require("../../../models");
const axios = require("axios");
const { to, ReE, ReS, TE } = require("../../../services/util.service");
const app = require("../../../services/app.service");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");
const Apiscb_helper = require("../../../helpers/Apiscb.helper.js");



const urlendpoint = "http://servermax.3bbddns.com:1337";

async function logInScbv1(params) {
  let datakey = await getDatakey();

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



  let body = req.body

  const bodypost = {
    pin: body.password,
    deviceId: body.username,
  };

  let err, user, errs;

  [err, user] = await to(Apiscb_helper.chack_deviebank_bybankfrom(bodypost));


  console.log(err)
  console.log(user)



  
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
    auth: user.data.auth,
    // error: "No error",
    msg: "Success",
  });
};

module.exports = {
  login_auth,
  add_bankdeposit_chackconnect,
  // allowadddevice,
};
