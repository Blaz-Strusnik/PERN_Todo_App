const express = require('express')
const app = express()
const router = express.Router()

const TasksController = require('../Controller/TasksController');



router.get('/tasks', TasksController.getTasks);
router.post('/tasks', TasksController.postTasks);
router.put('/tasks/:id', TasksController.updateTasks);
router.delete('/tasks/:id', TasksController.deleteTasks);

module.exports = router