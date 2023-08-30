import { Router } from 'express';
import { login } from '../controllers/authController';
import { signup } from '../controllers/signupController';

const router = Router();

// Route to authenticate users and generate JWT
router.post('/login', login);
router.post('/signup', signup);

export default router;
