import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistryController from './app/controllers/RegistryController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AnswerController from './app/controllers/AnswerController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get(
    '/students/:student_id/checkins/', CheckinController.index
);
routes.post(
    '/students/:student_id/checkins/', CheckinController.store
);

routes.get(
    '/students/:student_id/help-orders/', HelpOrderController.index
);
routes.post(
    '/students/:student_id/help-orders/', HelpOrderController.store
);

routes.use(authMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/registries', RegistryController.index);
routes.post('/registries', RegistryController.store);
routes.put('/registries/:id', RegistryController.update);
routes.delete('/registries/:id', RegistryController.delete);

routes.get('/help-orders', AnswerController.index);
routes.put('/help-orders/:id/answer', AnswerController.update);


module.exports = routes;
