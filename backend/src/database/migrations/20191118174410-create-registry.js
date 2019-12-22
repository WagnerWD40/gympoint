'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('registries', { 
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
            plan_id: {
                type: Sequelize.INTEGER,
                references: { model: 'plans', key: 'id', as: 'plan_id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
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

    down: (queryInterface) => {
        return queryInterface.dropTable('registries');
    }
};
