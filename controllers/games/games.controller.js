var {
  Member,
  Admins,
  Accountbank,
  Setting,
  Bank,
  Askmebet,
  DetailGamesTypes,
  LottoType,
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
require("moment/locale/th");

// getAgentCredit
const providerPrefixLists = async function (req, res) {
  const body = req.body;
  let resd;

  [err, resd] = await to(Agent_Askmebets.providerPrefixList({}));
  let data = resd.data;
  return ReS(res, {
    data: data.data,
    error: "No error",
    msg: "Success",
  });
};

// AddFavouritesGamesList
const AddFavouritesGamesLists = async function (req, res) {
  const body = req.body;
  let data = {
    gameId: body.gameId,
    username: req.user.user_agent,
  };
  let resd;

  [err, resd] = await to(Agent_Askmebets.AddFavouritesGamesList(data));
  if (err) {
    return ReE(res, {
      error: err.message,
      msg: err.message,
    });
  }
  let data2 = resd.data;
  //   console.log(data2)
  return ReS(res, {
    code: data2.code,
    error: "No error",
    msg: data2.msg,
  });
};

// delFavourites
const delFavourite = async function (req, res) {
  const body = req.body;
  let data = {
    gameId: body.gameId,
    username: req.user.user_agent,
  };
  let resd;

  [err, resd] = await to(Agent_Askmebets.delFavourites(data));
  if (err) {
    return ReE(res, {
      error: err.message,
      msg: err.message,
    });
  }
  let data2 = resd.data;
  //   console.log(data2)
  return ReS(res, {
    code: data2.code,
    error: "No error",
    msg: data2.msg,
  });
};

// getFavourite
const getFavourite = async function (req, res) {
  const body = req.body;
  let data = {
    username: req.user.user_agent,
  };
  let resd;

  [err, resd] = await to(Agent_Askmebets.getFavourites(data));
  if (err) {
    return ReE(res, {
      error: err.message,
      msg: err.message,
    });
  }
  let data2 = resd.data;
  //   console.log(data2)
  return ReS(res, {
    data: data2,
    code: data2.code,
    error: "No error",
    msg: data2.msg,
  });
};
// gameList
const gameLists = async function (req, res) {
  const body = req.body;
  let data = {
    tab: body.tab,
  };
  let resd;

  [err, resd] = await to(Agent_Askmebets.gameList(data));
  if (err) {
    return ReE(res, {
      error: err.message,
      msg: err.message,
    });
  }
  let data2 = resd.data;
  //   console.log(data2)
  return ReS(res, {
    data: data2,
    code: data2.code,
    error: "No error",
    msg: data2.msg,
  });
};
// getRecently  เกมที่เล่นล่าสุด
const getRecently = async function (req, res) {
  const body = req.body;
  let data = {
    username: req.user.user_agent,
  };
  let resd;

  [err, resd] = await to(Agent_Askmebets.getRecentlys(data));
  if (err) {
    return ReE(res, {
      error: err.message,
      msg: err.message,
    });
  }
  let data2 = resd.data;
  //   console.log(data2)
  return ReS(res, {
    data: data2.data,
    code: data2.code,
    error: "No error",
    msg: data2.msg,
  });
};

// gamesType
const DetailTypes = async function (req, res) {
  const body = req.body;

  let data = await DetailGamesTypes.findAll({});
  return ReS(res, {
    data: data,
    code: 0,
    error: "No error",
    msg: "Success",
  });
};

// lottoType
const lottoType = async function (req, res) {
const body = req.body;
//   let d = [
  //     {
  //       game: "lottotype",
  //       gameType: "home",
  //       name: "หน้าหลัก",
  //       th: "th",
  //       en: "en",
  //       status: 1,
  //     },
  //   ];
  //   for (const iterator of d) {
  //     let data = await LottoType.create({
  //       game: "lottotype",
  //       gameType: iterator.gameType,
  //       name: iterator.name,
  //       th: "th",
  //       en: "en",
  //       status: 1,
  //     });
  //   }

  let data = await LottoType.findAll({});
  return ReS(res, {
    data: data,
    code: 0,
    error: "No error",
    msg: "Success",
  });
};
module.exports = {
  providerPrefixLists,
  AddFavouritesGamesLists,
  delFavourite,
  getFavourite,
  gameLists,
  getRecently,
  DetailTypes,
  lottoType,
};
