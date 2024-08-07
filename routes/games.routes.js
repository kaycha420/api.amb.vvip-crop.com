const express = require("express");
const gamesRouter = express.Router();
const gamesControllers = require("../controllers/games/games.controller");

const passport = require("passport");
const multer = require('multer');

const userMidd = require("../middleware/app.user"); 
require("../middleware/passport_admin")(passport);

// games
gamesRouter.get("/providerPrefixLists",  gamesControllers.providerPrefixLists);
gamesRouter.post("/AddFavouritesGamesList", passport.authenticate("jwt", { session: false }), userMidd.checkUser, gamesControllers.AddFavouritesGamesLists);
gamesRouter.post("/delFavourite", passport.authenticate("jwt", { session: false }), userMidd.checkUser, gamesControllers.delFavourite);
gamesRouter.get("/getFavourites", passport.authenticate("jwt", { session: false }), userMidd.checkUser, gamesControllers.getFavourite);
gamesRouter.post("/gameList",  gamesControllers.gameLists);

// getRecently  เกมที่เล่นล่าสุด
gamesRouter.get("/getRecently", passport.authenticate("jwt", { session: false }), userMidd.checkUser, gamesControllers.getRecently);
gamesRouter.get("/DetailTypes",  gamesControllers.DetailTypes);
gamesRouter.get("/lottoType",  gamesControllers.lottoType);



module.exports = gamesRouter;

