import { Request, Response } from 'express';
import Task from '../models/Task';

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a task' });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.update(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the task' });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the task' });
  }
}
