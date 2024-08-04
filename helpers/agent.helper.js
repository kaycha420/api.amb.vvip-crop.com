var { Askmebet } = require("../models");

// create_userAgent
const create_userAgent = async (item) => {
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: item.agentUsername,
    key: item.key,
    username: item.username,
    name: item.name,
    password: item.password,
    web: item.web,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${item.domain}/ext/createUser/${item.prefix}/${item.agentUsername}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

// getProfileAndCredit
const getProfileAndCredit = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    username: item.username,
    web: Askmebets.Web,
  });

  // console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/getProfileAndCredit/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

// getAgentCredit
const getAgentCredit = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
  });

  console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/getAgentCredit/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  providerPrefixList
const providerPrefixList = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/providerPrefixList/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  AddFavouritesGamesList
const AddFavouritesGamesList = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
    gameId: item.gameId,
    username: item.username,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/addFavourites/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  delFavourites
const delFavourites = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
    gameId: item.gameId,
    username: item.username,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/delFavourites/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};
//  getFavourites
const getFavourites = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
    gameId: item.gameId,
    username: item.username,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/getFavourites/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  gameList
const gameList = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
    tab: item.tab,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/gameList/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  getRecentlys เกมที่เล่นล่าสุด
const getRecentlys = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    web: Askmebets.Web,
    username: item.username,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/getRecently/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  deposit
const deposit = async (item) => {

  
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    username: item.username,
    balance: item.balance,
    isDp: true,
    web: Askmebets.Web,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/deposit/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};

//  withdrawal
const withdrawal = async (item) => {
  const Askmebets = await Askmebet.findOne({
    where: {
      status_run: 1,
    },
  });
  const axios = require("axios");
  let data = JSON.stringify({
    agentUsername: Askmebets.agent,
    key: Askmebets.key_agent,
    username: item.username,
    balance: item.balance,
    web: Askmebets.Web,
  });

  //console.log(Askmebets)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${Askmebets.domain}/ext/withdrawal/${Askmebets.prefix}/${Askmebets.agent}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};
module.exports = {
  create_userAgent,
  getProfileAndCredit,
  getAgentCredit,
  providerPrefixList,
  AddFavouritesGamesList,
  delFavourites,
  getFavourites,
  gameList,
  getRecentlys,
  deposit,
  withdrawal
};
