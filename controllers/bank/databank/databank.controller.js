var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
  Askmebet,
  Transaction,
} = require("../../../models");
//const Api_bet = require("../../apiall/apibetfix/apibetfix");
//const ApiNotify = require("../../apis/notify.api");
const { to, ReE, ReS, TE } = require("../../../services/util.service.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../../config/config.json");
const Agent_Askmebets = require("../../../helpers/agent.helper.js");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const app = require("../../../services/app.service.js");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");

const urlendpoint = "http://192.168.1.180:1337";

var moment = require("moment");
const { where } = require("sequelize");
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
    url: urlendpoint + "/genpin_step1",
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
const getdadaily_deposits = async function (req, res) {
  const startDate = new Date(
    moment().startOf("day").format("YYYY-MM-DD HH:mm"),
  );
  const endDate = new Date(moment().endOf("day").format("YYYY-MM-DD HH:mm"));

  let err, Data_Accountbanks, Data_Accountbanksw;

  [err, Data_Accountbanks] = await to(
    Accountbanks.findAll({
      include: [
        {
          as: "Bank",
          model: Bank,
          attributes: {
            include: [],
            exclude: ["deleted_at", "created_at", "updated_at"],
          },
          required: true,
        },
      ],
      attributes: [
        "id",
        "accnum",
        "name_accnum",
        "status_scb",
        "from_b",
        "bank_id",
        "setting_id",
        "level",
        "option_b",
        "time_crul",
        "tobank_accnum",
        "tobank_monney",
        "status",
        "text_data",
        "limit_wit",
        "limit_d",
        "tobank_bank",
        "tobank_minmonny",
        "tobank_stust",
        "baba",
        "status_connact",
        "from_accnum",
        "name_bank",
        "autowit_status",
        "autowit_minmony",
        "status_run",
      ],

      where: {
        status_run: 1,
        status_connact: 1,
        status_scb: 1,
        option_b: "ฝาก",
      },
    })
  );
  [err, Data_Accountbanksw] = await to(
    Accountbanks.findAll({
      include: [
        {
          as: "Bank",
          model: Bank,
          attributes: {
            include: [],
            exclude: ["deleted_at", "created_at", "updated_at"],
          },
          required: true,
        },
      ],
      attributes: [
        "id",
        "accnum",
        "name_accnum",
        "status_scb",
        "from_b",
        "bank_id",
        "setting_id",
        "level",
        "option_b",
        "time_crul",
        "tobank_accnum",
        "tobank_monney",
        "status",
        "text_data",
        "limit_wit",
        "limit_d",
        "tobank_bank",
        "tobank_minmonny",
        "tobank_stust",
        "baba",
        "status_connact",
        "from_accnum",
        "name_bank",
        "autowit_status",
        "autowit_minmony",
        "status_run",
      ],

      where: {
        status_run: 1,
        status_connact: 1,
        status_scb: 1,
        option_b: "ถอน",
      },
    })
  );
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
    where: {
      created_at: {
        [Op.between]: [startDate, endDate],
      },
    },
    order: [["id", "DESC"]],
  });
  ///console.log(Data_Accountbanks)

  letdataretrun = {
    data_dis: Data_Accountbanks,
    data_wit: Data_Accountbanksw,
    datatran: getdata,
  };

  return ReS(res, {
    data: letdataretrun,
    error: "Server error",
    msg: "Server error",
  });
};

const allowadddevice = async function (req, res) {
  let body = req.body;

  let datapost = {
    otp: body.otp,
    tokenUUID: body.tokenUUID,
    auth: body.auth,
  };

  let gotoconotp = await allowadddevices_bupass(datapost);

  if (gotoconotp.data.data.status.code == 1000) {
  }

  //console.log()
};

module.exports = {
  getdadaily_deposits,
  allowadddevice,
};
