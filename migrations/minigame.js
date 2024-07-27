'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('minigame', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name_game: {
                type: Sequelize.STRING,
                allowNull: true
            },
            status_spin: {
                type: Sequelize.STRING,
                allowNull: true
            },

            
            url_play: {
                type: Sequelize.STRING,
                allowNull: true
            },
            url_img: {
                type: Sequelize.STRING,
                allowNull: true
            },
            text: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            url_play: {
                type: Sequelize.STRING,
                allowNull: true
            },
            added_by: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            addtype_amount: {
                type: Sequelize.ENUM(["เข้ายูสเลย", "แอดมินยืนยันก่อน",]),
                allowNull: true,
            },
            addtype_spin: {
                type: Sequelize.ENUM(["ติดเงื่อนไขถอน", "ถอนไม่มีเงื่อนไข",]),
                allowNull: true,
            },
            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true
            },

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('minigame');
    }
};