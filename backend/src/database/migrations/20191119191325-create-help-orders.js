'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('help_orders', { 
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            student_id: {
                type: Sequelize.INTEGER,
                references: { model: 'students', key: 'id', as: 'student_id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            answer: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            answer_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at:{
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('help_orders');
    }
};
