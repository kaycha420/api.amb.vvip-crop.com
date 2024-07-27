'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menu_backend', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: true
            },
            path: {
                type: Sequelize.STRING,
                allowNull: true
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            active: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            title_main: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 0,
            },
            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('menu_backend');
    }
};