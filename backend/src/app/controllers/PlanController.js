import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string()
                .required(),
            duration: Yup.number()
                .required()
                .positive()
                .integer(),
            price: Yup.number()
                .required()
                .positive()
                .integer(),
        })

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Plan schema validation fail' });
        }

        const { title, duration, price } = req.body;

        const plan = await Plan.create({
            title,
            duration,
            price,
        });        

        return res.json(plan);
    };
    
    async index(req, res) {
        const plans = await Plan.findAll();

        return res.json(plans);
    };

    async update(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string(),
            duration: Yup.number()
                .positive()
                .integer(),
            price: Yup.number()
                .positive()
                .integer(),
        })

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Plan schema validation fail' });
        }

        const { id } = req.params;

        const plan = await Plan.findOne({
            where: { id },
        })

        if (!plan) {
            return res
                    .status(404)
                    .json({ error: 'Plan not found' });
        }

        const { title, duration, price } = req.body;

        const updatedPlan = await plan.update({
            title,
            duration,
            price
        });

        return res.json(updatedPlan);
    };

    async delete(req, res) {
        const { id } = req.params;

        const plan = await Plan.findByPk(id);

        if (!plan) {
            return res.status(404).json({ error: 'Plan not found' });
        }

        Plan.destroy({
            where: { id }
        });

        return res.json(plan);
    };

};

export default new PlanController();