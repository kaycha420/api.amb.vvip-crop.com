'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promotion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      percen: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    x: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    text: {
        type: Sequelize.STRING,
        allowNull: true
    },
    exprice: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name_pro: {
        type: Sequelize.STRING,
        allowNull: true
    },
    limit_d: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    limit_w: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    
    img_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status_online: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bank_dispodit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    level_pro: {
        type: Sequelize.ENUM(['สมัครใหม่', 'สมาชิกเก่า','นาทีทอง','กงล้อ','แจกฟรี', ]),
        allowNull: true,

    },  
    status_showpro: {
        type: Sequelize.ENUM(['แสดงหน้าเว็บ', 'ไม่แสดงหน้าเว็บ','แสดงหน้าเว็บ+ปุ่มกดรับเครดิต' ]),
        allowNull: true,

    },
    
    status_add: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true,
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
    },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('promotion');
  }
};