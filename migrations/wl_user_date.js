'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wl_user_date', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      type_wl: {
        type: Sequelize.ENUM(['card', 'casino', 'hdp', 'keno', 'lotto', 'mixParlay', 'mixStep', 'poker', 'slot']),
        allowNull: true
      },
      com: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      stake: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      vl: { 
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      wl: { 
        type: Sequelize.DOUBLE,
        allowNull: true ,
        defaultValue: 0
      },
      status_wl: { 
        type: Sequelize.DOUBLE,
        allowNull: true ,
        defaultValue: 0
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
    await queryInterface.dropTable('wl_user_date');
  }
};