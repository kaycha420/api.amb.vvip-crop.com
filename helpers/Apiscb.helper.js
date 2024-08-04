var { Askmebet } = require("../models");

//  withdrawal
const chack_deviebank_bybankfrom = async (item) => {
  const axios = require("axios");
  let data = JSON.stringify({
    deviceId: item.deviceId,
    pin: item.pin,
  });

  let dataauth = await getDatakey();

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://servermax.3bbddns.com:1337/api/v10/scb/chack_preloadandresumecheck",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dataauth.data.data.token}`,
    },
    data: data,
  };

  return axios.request(config);
};

const getDatakey = async () => {
  const axios = require("axios");
  let data = JSON.stringify({
    Apikey: "1f1kiaaw6oseckqqmr1t",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://servermax.3bbddns.com:1337/api/v10/scb/getTokenApi",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios.request(config);
};

const chackloginauth = async (props) => {
  const axios = require("axios");
  let data = JSON.stringify({
    auth: props.auth,
    accountNo: props.accountNo,
  });
  let dataauth = await getDatakey();
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://servermax.3bbddns.com:1337/api/v10/scb/chackloginauth",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dataauth.data.data.token}`,
    },
    data: data,
  };

  return await axios.request(config);
};

module.exports = {
  chack_deviebank_bybankfrom,
  getDatakey,
  chackloginauth,
};
