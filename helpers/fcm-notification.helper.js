const app = require('../services/app.service');
const config = require('../config/app.json')[app['env']];
const io = require("socket.io-client");
var socket = io.connect(config["BASE_URL"], { reconnect: true });


const sendNotification = async function (data) {

    let datanoti = await NotificationMessage.create(data);

    socket.emit("sendNotification", datanoti)

    return datanoti

}

module.exports = {
    sendNotification
}