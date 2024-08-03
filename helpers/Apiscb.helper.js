var { Askmebet } = require("../models");

//  withdrawal
const chack_deviebank_bybankfrom = async (item) => {
  const axios = require('axios');
  let data = JSON.stringify({
    "username": "460859d2-25ff-d3a7-3716-735b0cd1e871",
    "password": "589589",
   
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://183.89.207.27:1336/api/v5/admin/add_bankdeposit_chackconnect',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': '••••••'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  


  return axios.request(config);
};


module.exports = {
  chack_deviebank_bybankfrom,
  
};
