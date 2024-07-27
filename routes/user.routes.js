const express = require("express");
const userRouter = express.Router();

const userControllers = require("../controllers/user/user.controller");

const passport = require("passport");
const multer = require('multer');

const userMidd = require("../middleware/app.user"); 
require("../middleware/passport_admin")(passport);


//สมัครสมาชิก (user)
userRouter.post("/register", userControllers.register);
userRouter.post("/loginmember", userControllers.loginmember);

module.exports = userRouter;
