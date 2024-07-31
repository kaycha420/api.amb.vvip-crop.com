var {
  Member,
  Admins,
  Accountbank,
  Setting,
  Bank,
  Askmebet,
  DetailGamesTypes,
  LottoType,
} = require("../../../models");
//const Api_bet = require("../../apiall/apibetfix/apibetfix");
//const ApiNotify = require("../../apis/notify.api");
const { to, ReE, ReS, TE } = require("../../../services/util.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../../config/config.json");
const Agent_Askmebets = require("../../../helpers/agent.helper.js");

const app = require("../../../services/app.service");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");
var moment = require("moment");
require("moment/locale/th");

async function genpin_step1(item) {
  const axios = require("axios");
  let data = JSON.stringify({
    cardId: item.cardId,
    dateOfBirth: item.dateOfBirth,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://192.168.1.180:1337/genpin_step1",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios.request(config);
}

async function allowadddevices_bupass(item) {
  const axios = require("axios");

  let data = JSON.stringify({
    otp: item.otp,
    tokenUUID: item.tokenUUID,
    auth: item.auth,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://192.168.1.180:1337/allowadddevice",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios.request(config);
}

async function generateOTP(item) {
  const axios = require("axios");
  let data = JSON.stringify({
    phone: item.phone,
    auth: item.auth,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://192.168.1.180:1337/generateOTP",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios.request(config);
}

// getAgentCredit
const gendatadevie_scb = async function (req, res) {
  if (!req.body) {
    return false;
  }

  let getdata_step1 = await genpin_step1(req.body);

  if (getdata_step1.data.data.status.code == 1000) {
    let datamobey = {
      auth: getdata_step1.data.headers["api-auth"],
      phone: req.body.phone,
    };

    /// console.log(datamobey)

    let getdatamemberlist = await generateOTP(datamobey);

    //console.log(getdatamemberlist.data)

    if (getdatamemberlist.data.data.status.statuscode == "0") {
      return ReS(res, {
        data: getdatamemberlist.data.data,
        auth: getdata_step1.data.headers["api-auth"],
        error: "No error",
        msg: "Success",
      });

      // console.log(getdatamemberlist.data);
    }
  } else {
    return ReE(res, {
      error: "error",
      msg: getdatamemberlist.data.data.status.description,
    });
  }
};

const allowadddevice = async function (req, res) {
  let body = req.body;

  let datapost = {
    otp: body.otp,
    tokenUUID: body.tokenUUID,
    auth: body.auth,
  };

  let gotoconotp = await allowadddevices_bupass(datapost);

  if(gotoconotp.data.data.status.code == 1000){
    
  }

  //console.log()





};

module.exports = {
  gendatadevie_scb,
  allowadddevice,
};
