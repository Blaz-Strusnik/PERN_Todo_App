import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();

// Route to authenticate users and generate JWT
router.post('/login', login);

export default router;
