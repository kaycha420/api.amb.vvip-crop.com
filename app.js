require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./services/app.service");



const socketIo = require("socket.io");


const settingRouter = require("./routes/setting.routes");
const setusettingRouter = require("./routes/setusetting.routes");
const userRouter = require("./routes/user.routes");
const bankallRouter = require("./routes/bankall.routes");
const adminRouter = require("./routes/admin.routes");












//ejs Plugin
app.engine("html", require("ejs").renderFile);
// end

app.use(express.json({ limit: "25mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use('/storage', express.static(__dirname + '/public'));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/images", express.static(__dirname + "/images"));
app.set ( "view engine", "ejs" );



app.use("/api/v5/setting", settingRouter);
app.use("/api/v5/settingnoauth", setusettingRouter);
app.use("/api/v5/user", userRouter);
app.use("/api/v5/admin", adminRouter);
app.use("/api/v5/bankall", bankallRouter);















app.get("/", (_req, res) => {

  res.json({ message: "Welcome to API AMB" });
});
  


const PORT = process.env.PORT || config["port"];
let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});