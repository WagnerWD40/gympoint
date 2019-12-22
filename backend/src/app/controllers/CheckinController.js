import { differenceInCalendarDays, parseISO } from 'date-fns';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
    async store(req, res) {
        const { student_id } = req.params;

        const student = await Student.findByPk(student_id);

        if (!student) {
            return res
                    .status(404)
                    .json({ error: 'Student not found' });
        }

        const checkins = await Checkin.findAll({
            where: { student_id },
            attributes: ['id', 'createdAt'],
            order: [['createdAt', 'ASC']],
        });

        if (checkins.length >= 5) {
            const slicedCheckins = checkins.slice(-5);

            const dateDiff = differenceInCalendarDays(
                slicedCheckins[slicedCheckins.length - 1].createdAt,
                slicedCheckins[0].createdAt,
            );

            if (dateDiff < 7) {
                return res
                    .status(401)
                    .json({ error: 'A student can not do over 5 checkins a week' });
            }
        }

        const checkin = await Checkin.create({
            student_id,
        });

        return res.json(checkin);
    };

    async index(req, res) {
        const { student_id } = req.params;

        const checkins = await Checkin.findAll({
            where: { student_id },
            attributes: ['id', 'createdAt'],
            order: [['createdAt', 'ASC']],
        });
        
        return res.json(checkins);
    };
};

export default new CheckinController();