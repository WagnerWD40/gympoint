import * as Yup from 'yup';

import Student from '../models/Student';
import { Sequelize } from 'sequelize';

class StudentController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string()
                .required(),
            email: Yup.string()
                .email()
                .required(),
            age: Yup.number()
                .required()
                .positive()
                .integer(),
            weight: Yup.number()
                .required()
                .positive()
                .integer(),
            heigth: Yup.number()
                .required()
                .positive()
                .integer(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Student schema validation fail' });
        };

        const { name, email, age, weight, heigth } = req.body;

        const studentExists = await Student.findOne({
            where: { email: req.body.email }
        });

        if (studentExists) {
            return res
                    .status(400)
                    .json({ error: 'Student email already in database' });
        };

        const student = await Student.create({
            name,
            email,
            age,
            weight,
            heigth,
        });
        
        return res.json(student);
    };

    async index(req, res) {
        const { name } = req.query;

        if (!name) {
            const students = await Student.findAll();

            return res.json(students);
        };

        const Op = Sequelize.Op;

        const students = await Student.findAll({
            where: {
                name : {
                    [Op.like]: `%${name}%`
                },  
            },
        });

        return res.json(students);
    };

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string()
                .required(),
            email: Yup.string()
                .email(),
            age: Yup.number()
                .positive()
                .integer(),
            weight: Yup.number()
                .positive()
                .integer(),
            heigth: Yup.number()
                .positive()
                .integer(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                    .status(400)
                    .json({ error: 'Student schema validation fail' });
        }
        const { id } = req.params;

        const student = await Student.findOne({
            where: { id }
        });

        if (!student) {
            return res
                    .status(404)
                    .json({ error: 'Student not found' });
        };

        const {email, name, age, weight, heigth } = req.body;

        const updatedStudent = await student.update({
            email,
            name,
            age,
            weight,
            heigth,
        });

        return res.json(updatedStudent);
    };

    async delete(req, res) {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        Student.destroy({
            where: { id }
        });

        return res.json(student);
    };
};

export default new StudentController();