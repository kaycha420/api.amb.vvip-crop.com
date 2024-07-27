'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('systemsettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      changeLogo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      changeFav: {
        type: Sequelize.STRING,
        allowNull: true
      },
      changeTitle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      changePreloader : {
        type: Sequelize.STRING,
        allowNull: true
      },
      changeMarquee: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updatedNews: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      changeLine: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      changeFacebook: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      changeYoutube: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      updatedLate: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('systemsettings');
  }
};