var {
  Member,
  Admins,
  Accountbanks,
  Setting,
  Bank,
} = require("../../../models");

const { to, ReE, ReS, TE } = require("../../../services/util.service");
const app = require("../../../services/app.service");
const config = require("../../../config/app.json")[app["env"]];
const Notification = require("../../../helpers/notification.helper.js");

const urlendpoint = "http://servermax.3bbddns.com:1337";
