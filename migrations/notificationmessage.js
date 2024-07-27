'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('notificationmessage', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            notification_title: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            notification_text: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            notification_image: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            transaction_id: {
              type: Sequelize.INTEGER,
              allowNull: true,
            },
            
            notification_icon: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            master_notification_id: {
              type: Sequelize.INTEGER,
              allowNull: true,
            },
            team_id: {
              type: Sequelize.INTEGER,
              // references: { model: "teams", key: "id" },
              // onDelete: "CASCADE",
              allowNull: true,
            },
            from_user_id: {
              type: Sequelize.INTEGER,
              // references: { model: "users", key: "id" },
              // onDelete: "CASCADE",
              allowNull: true,
            },
            to_user_id: {
              type: Sequelize.INTEGER,
              // references: { model: "users", key: "id" },
              // onDelete: "CASCADE",
              allowNull: true,
            },
            is_read: {
              type: Sequelize.INTEGER,
              defaultValue: 0,
              allowNull: false
            },
            type_option: {
              type: Sequelize.ENUM(['ฝาก', 'ถอน', 'สมัคร', 'โอนเงิน','คืนยอดเสีย','ค่าคอม', 'โบนัส', 'ฟรี']),
              allowNull: false,
             
            },
            type: {
              type: Sequelize.ENUM('MatchInvitation','MatchInvitationAccept', 'MatchInvitationDecline', 'AcceptFrientRequest', 'RejectFrientRequest'
              ,'ClanJoinInvitation', 'ClanJoinAccept', 'ClanJoinDecline', 'Mailbox','showadmin'),
              allowNull: true
            },
            deleted_at: {
              allowNull: true,
              type: Sequelize.DATE
            },
            created_at: {
              allowNull: true,
              type: Sequelize.DATE
            },
            updated_at: {
              allowNull: true,
              type: Sequelize.DATE
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('notificationmessage');
    }
};