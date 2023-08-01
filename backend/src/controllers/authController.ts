import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';
import User from '../models/User';
import bcrypt from 'bcrypt';

// Endpoint to authenticate users and generate JWT
export async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials. Authentication failed.' });
    }

    // Compare the provided plaintext password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials. Authentication failed.' });
    }

    // If the password is valid, generate a JWT token and respond with it
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour, change this as needed
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}
