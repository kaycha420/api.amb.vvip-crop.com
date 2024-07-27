'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('websetting', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo_pc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      logo_phone: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      logo_icon: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      logo_admin : {
        type: Sequelize.TEXT,
        allowNull: true
      },
      name_web: {
        type: Sequelize.STRING,
        allowNull: true
      },
      url_web: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      url_beat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      link_downloadapp: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      link_downloadall: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status_server: {
        allowNull: true,
        type: Sequelize.ENUM(['running', 'event_time', 'stop', 'maintenance', 'maintenance_date',]),
      },
      status_game: {
        allowNull: true,
        type: Sequelize.ENUM(['running', 'event_time', 'stop', 'maintenance', 'maintenance_date',]),
      }
      ,
      MessageEvent: {
        allowNull: true,
        type: Sequelize.TEXT
      }
      ,
      Message_notify: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('websetting');
  }
};