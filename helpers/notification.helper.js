const { MasterNotification, UserNotificationSetting } = require("../models");

const getUserNotifiedStatusByType = async (type , user_id) => {
    let notified = false;
    const notification = await UserNotificationSetting.findOne({
        include: [
            {
                as: "Notification",
                model: MasterNotification,
                attributes: [
                    'notification_name'
                ],
                required: true,
                where: {
                    type: type,
                }
            },
        ],
        attributes: [
            'notification_status'
        ],
        where: {
            user_id: user_id,
        }
    })

    if(notification){
        notified = notification.notification_status ? true : false;
    }

    return notified;
  }
  
  module.exports = {
    getUserNotifiedStatusByType
  };