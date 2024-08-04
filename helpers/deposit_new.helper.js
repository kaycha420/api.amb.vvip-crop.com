var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
  Server_apiscb,
  Request_allscb,
  Transaction,
  Request_allkbank,
  NotificationMessage
} = require("../models");
const Apiamb = require("./agent.helper");
var moment = require("moment");

async function run_deposit(accnum, alldata) {
  function conRes(resd) {
    return Object.values(JSON.parse(JSON.stringify(resd)));
  }

  let data_Member = await Member.findAll({});

  for (const data of conRes(data_Member)) {
    let text = data.accnum;
    let result = text.indexOf(accnum);
    //console.log(result)
    if (result >= 4) {
      let datasid = {
        username: data.user_agent,
        balance: alldata.amount,
      };

      let gotodep = await Apiamb.deposit(datasid);
      if (gotodep.data.code == 0) {
        const status_pay = await Request_allscb.update(
          {
            status_pay: 0,
          },
          {
            where: {
              id: alldata.id,
            },
          }
        );
        let data_create = {
          user_id: data.id,
          amount: alldata.amount,
          remark: "ฝากเงิน Scb",
          bank_from: "SCB",
          name_member: data.name,
          status: "success",
          add_from: "netbank",
          bank_to: data.bank,
          description: alldata.description,
          datw_new: moment(alldata.date_creat).format(),
          created_at: alldata.date_creat,
          date_new1: moment(alldata.date_creat).format(),
          type_option: "ฝาก",
          ref: gotodep.data.data.refId,
          c_before: gotodep.data.data.beforeCredit,
          c_after: gotodep.data.data.afterCredit,
        };

        let createaddscc = await Transaction.create(data_create);

        let datanoti = await NotificationMessage.create({
          notification_title: `แจ้งเตือน เติมเงิน (ฝากเงิน SCB) `,
          from_user_id: data.username,
          notification_text: `สมาชิก ${data.username}  ${"เติมเงิน "} ${
            data_create.remark
          } บัญชี ${data_create.acc_from}  จำนวน  ${data_create.amount} บาท `,
          type: "showadmin",
          type_option: "ฝาก",
          transaction_id: createaddscc.id,
        });
      }

      //console.log(data_create);
      // console.log(gotodep.data);
    }
  }
}

const chack_Deposit = async (props) => {
  function conRes(resd) {
    return Object.values(JSON.parse(JSON.stringify(resd)));
  }

  let data_Request = await Request_allscb.findAll({
    where: {
      status_pay: 3,
    },
  });

  for (const rr of conRes(data_Request)) {
    let accnum = rr.accnum;
    let run_deposits = await run_deposit(accnum, rr);
  }
};

module.exports = {
  chack_Deposit,
};
