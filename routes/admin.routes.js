const express = require("express");
const addminRouter = express.Router();
const adminControllers = require("../controllers/admin/admin.controller");

const passport = require("passport");
const multer = require('multer');

const userMidd = require("../middleware/app.admin"); 
require("../middleware/passport_admin")(passport);

addminRouter.post("/loginadmin", adminControllers.loginadmin);
addminRouter.post("/cerate_useradmin", adminControllers.cerate_useradmin);


//addminRouter.get("/getAllAdmin",passport.authenticate("jwt", { session: false }), userMidd.checkUser, adminControllers.getAllAdmin);

module.exports = addminRouter;

