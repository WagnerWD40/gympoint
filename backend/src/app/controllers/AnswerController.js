import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Mail from '../../lib/Mail';

class AnswerController {
    async index(req, res) {
        const helpOrders = await HelpOrder.findAll({
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['name'],
                },
            ],
        });

        return res.json(helpOrders);
    };

    async update(req, res) {
        const { id } = req.params;
    
        const helpOrder = await HelpOrder.findByPk(id, {
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['id', 'name', 'email'],
                },
            ],
        });
    
        if (!helpOrder) {
            return res.status(404).json({ error: 'Help Order not found' });
        }
    
        const { answer } = req.body;
    
        const updatedHelpOrder = await HelpOrder.update(
            { 
                answer,
                answer_at: new Date(),
            },
            {
                returning: true,
                where: { id },
            },
        );
    
        const [,[returnedUpdatedHelpOrder]] = updatedHelpOrder;
    
        const { name, email } = helpOrder.student;
        
        await Mail.sendMail({
            to: `${name} <${email}>`,
            subject: 'Sua pergunta foi respondida!',
            template: 'answerarrived',
            context: {
                studentName: name,
                question: helpOrder.question,
                answer: returnedUpdatedHelpOrder.answer,
            },
        });
    
        return res.json(returnedUpdatedHelpOrder);
    };
};

export default new AnswerController();
