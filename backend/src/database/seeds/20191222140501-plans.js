'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'plans',
            [
                {
                    title: 'Golden Wind',
                    duration: 3,
                    price: 129,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: 'Star Platinum',
                    duration: 6,
                    price: 109,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: 'Diamond is Unbreakable',
                    duration: 12,
                    price: 89,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
        );
    },

    down: () => {}
};
