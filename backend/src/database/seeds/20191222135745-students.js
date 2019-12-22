'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'students',
            [
                {
                    name: 'Lyelle Rafalle',
                    email: 'vanadiel@ffxi.com',
                    age: 22,
                    weight: 55,
                    heigth: 167,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Milly Cook',
                    email: 'milly@vanilly.com',
                    age: 24,
                    weight: 60,
                    heigth: 173,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Rowan Boyle',
                    email: 'rowan_123@gmail.com',
                    age: 30,
                    weight: 70,
                    heigth: 160,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Felix Mendez',
                    email: 'felix@thecat.com',
                    age: 30,
                    weight: 80,
                    heigth: 195,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Evangeline Blake',
                    email: '2littleeva@hotmail.com',
                    age: 18,
                    weight: 45,
                    heigth: 155,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
        );
    },

    down: () => {}
};

