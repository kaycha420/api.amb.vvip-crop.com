'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('point_log', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            user_id: {
                type: Sequelize.STRING,
                allowNull: true
            },
            item: {
                type: Sequelize.STRING,
                allowNull: true
            },
            point_date: {
                type: Sequelize.DATE,
                allowNull: true
            },
            withdraw_status: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            accept_status: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            withdraw_date: {
                type: Sequelize.DATE,
                allowNull: true
            },
            accept_date: {
                type: Sequelize.DATE,
                allowNull: true
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
        await queryInterface.dropTable('point_log');
    }
};