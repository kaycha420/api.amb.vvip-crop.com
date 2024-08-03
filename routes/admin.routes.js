const express = require("express");
const addminRouter = express.Router();
const adminControllers = require("../controllers/admin/admin.controller");
const ScbgenControllers = require("../controllers/bank/apiscb_den/games.controller");
const Scbclass_Controllers = require("../controllers/bank/apiscb_deposit/Apiscbdeposit.controller");




const passport = require("passport");
const multer = require('multer');

const userMidd = require("../middleware/app.admin"); 
require("../middleware/passport_admin")(passport);

addminRouter.post("/loginadmin", adminControllers.loginadmin);
addminRouter.get("/chacklogin", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.chacklogin);
addminRouter.post("/cerate_useradmin", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.cerate_useradmin);
addminRouter.get("/getdata_admin", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getdata_admin);
addminRouter.post("/edit_useradmin", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.edit_useradmin);
addminRouter.get("/getdatasetting", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getdatasetting);
addminRouter.get("/getdata_memberall", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getdata_memberall);
addminRouter.post("/getdamember_detail", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getdamember_detail);
addminRouter.post("/add_bankdeposit", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.add_bankdeposit);
addminRouter.get("/getdata_bankdeposit", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getdata_bankdeposit);
addminRouter.post("/addmember_byadmin", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.addmember_byadmin);
addminRouter.get("/getAgentCredit", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getAgentCredit);
addminRouter.get("/getTransactions", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getTransactions);
addminRouter.post("/addcredit", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.addcredit);
addminRouter.post("/delCredit", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.delCredit);
addminRouter.get("/getdata_bankAll", passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.setgetdata_bankAll);





// devie scb

addminRouter.post("/gendevies", passport.authenticate("jwt", { session: false }), userMidd.checkUser, ScbgenControllers.gendatadevie_scb);
addminRouter.post("/postallowadddevice", passport.authenticate("jwt", { session: false }), userMidd.checkUser, ScbgenControllers.allowadddevice);


addminRouter.post("/chack_connect_login_auth_bank", passport.authenticate("jwt", { session: false }), userMidd.checkUser, Scbclass_Controllers.login_auth);







// 
addminRouter.get("/getdatabank_code",  adminControllers.getdatabank_code);

//addminRouter.get("/getAllAdmin",passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getAllAdmin);

// SCB LOGIN


module.exports = addminRouter;

