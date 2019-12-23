import { addMonths, format } from 'date-fns';
import * as Yup from 'yup';

import Registry from '../models/Registry';
import Plan from '../models/Plan';
import Student from '../models/Student';

import Mail from '../../lib/Mail';

class RegistryController {
    async store(req, res) {
        const schema = Yup.object().shape({
            student_id: Yup.number().required(),
            plan_id: Yup.number().required(),
            start_date: Yup.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Registry schema validation fail' });
        };

        const { student_id, plan_id, start_date } = req.body;   

        const plan = await Plan.findByPk(plan_id);
        
        const price = Number(plan.price) * Number(plan.duration);

        const end_date = addMonths(new Date(start_date), plan.duration);

        const registry = await Registry.create({
            student_id,
            plan_id,
            price,
            start_date,
            end_date,
        });

        const student = await Student.findByPk(student_id);

        await Mail.sendMail({
            to: `${student.name} <${student.email}>`,
            subject: 'Nova matrícula',
            template: 'greetings',
            context: {
                studentId: student_id,
                studentName: student.name,
                planName: plan.title,
                planPrice: plan.price,
                planEndDate: format(
                    end_date, "dd'/'MM'/'yyyy"
                ),
            },
        });

        return res.json(registry);
    };

    async index(req, res) {
        const registries = await Registry.findAll({
            attributes: ['id', 'price', 'start_date', 'end_date', 'active'],
            include: [
                {
                    model: Plan,
                    as: 'plan',
                    attributes: ['id', 'title', 'duration', 'price']
                },
                {
                    model: Student,
                    as: 'student',
                    attributes: ['id', 'name', 'email'],
                }
            ],
        });

        return res.json(registries);
    }

    async update(req, res) {
        const schema = Yup.object.shape({
            student_id: Yup.number(),
            plan_id: Yup.number(),
            start_date: Yup.date(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Registry schema validation fail' });
        };
        const { id } = req.params;

        const registry = await Registry.findByPk(id);

        if (!registry) {
            return res
                    .status(404)
                    .json({ error: 'Registry not found' });
        }

        return res.json(registry);
    }

    async delete(req, res) {
        const { id } = req.params;

        const registry = await Registry.findByPk(id);

        if (!registry) {
            return res
                    .status(404)
                    .json({ error: 'Registry not found' });
        }

        Registry.destroy({
            where: { id }
        });

        return res.json(registry);
    }
};

export default new RegistryController();