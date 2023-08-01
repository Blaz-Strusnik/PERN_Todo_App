import { Router } from 'express';
import * as taskController from '../controllers/taskController';
import * as authMiddleware from '../middleware/authMiddleware'
const router = Router();

router.use(authMiddleware.authenticateUser)

router.get('/api/tasks', taskController.getAllTasks);
router.post('/api/tasks', taskController.createTask);
router.put('/api/tasks/:id', taskController.updateTask);
router.delete('/api/tasks/:id', taskController.deleteTask);

export default router;
