import Sequelize, { Model } from 'sequelize';
import Student from './Student';

class HelpOrder extends Model {
    static init(sequelize) {
        super.init(
            {   
                question: Sequelize.STRING,
                answer: {
                    type: Sequelize.STRING,
                    defaultValue: null,
                    allowNull: true,
                },
                answer_at: {
                    type: Sequelize.DATE,
                    defaultValue: null,
                    allowNull: true,
                },
            },
            {
                sequelize
            }
        );

        return this;
    };

    static associate(models) {
        this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    }
};

export default HelpOrder;