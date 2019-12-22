import Sequelize, { Model } from 'sequelize';
import { isBefore, isAfter } from 'date-fns';

class Registry extends Model {
    static init(sequelize) {
        super.init(
            {
                start_date: Sequelize.DATEONLY,
                end_date: Sequelize.DATEONLY,
                price: Sequelize.INTEGER,
                active: {
                    type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
                        'start_date',
                        'end_date',
                    ]),
                    get() {
                        return (
                            isBefore(this.get('start_date'), new Date()) &&
                            isAfter(this.get('end_date'), new Date())
                        );
                    },
                },
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
        this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' })
    }
}

export default Registry;