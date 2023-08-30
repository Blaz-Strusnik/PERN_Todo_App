import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';
import User from '../models/User';
import bcrypt from 'bcrypt';

// Endpoint to create a new user account
export async function signup(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    // Check if a user with the provided username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    // Hash the provided password
    const hashedPassword = await bcrypt.hash(password, 10); // Use a suitable number of rounds

    // Create a new user with the hashed password
    const newUser = await User.create({
      username,
      password: hashedPassword,
      // You can add other properties like 'role' here if needed
    });

    // Generate a JWT token for the new user and respond with it
    const token = jwt.sign({ id: newUser.id, username: newUser.username, role: newUser.role }, JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour, change this as needed
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}
