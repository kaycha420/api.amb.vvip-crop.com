'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('notify', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            text: {
                type: Sequelize.STRING,
                allowNull: true
            },
            status1: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            status1: {
                type: Sequelize.INTEGER,
                allowNull: false
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
        await queryInterface.dropTable('notify');
    }
};