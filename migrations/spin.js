'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('spin', {
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
            message: {
                type: Sequelize.STRING,
                allowNull: true
            },
            background: {
                type: Sequelize.STRING,
                allowNull: true
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            max_spin: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            current_spin: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            added_by: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('spin');
    }
};