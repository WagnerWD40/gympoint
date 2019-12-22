import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
    async store(req, res) {
        const { student_id } = req.params;

        const student = await Student.findByPk(student_id);
        
        if (!student) {
            return res
                    .status(404)
                    .json({ error: 'Student not found' });
        };

        const { question } = req.body;

        const helpOrder = await HelpOrder.create({
            student_id,
            question,
        });

        return res.json(helpOrder);
    };

    async index(req, res) {
        const { student_id } = req.params;

        const student = await Student.findByPk(student_id);
        
        if (!student) {
            return res
                    .status(404)
                    .json({ error: 'Student not found' });
        };

        const helpOrders = await HelpOrder.findAll({
            where: { student_id },
        });

        return res.json(helpOrders);
    };

};

export default new HelpOrderController();