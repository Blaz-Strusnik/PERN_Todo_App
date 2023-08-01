import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

// Middleware to verify JWT and authenticate users
export function authenticateUser(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Authentication failed. Token not provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token.' });
    }

    // If authentication is successful, store the user object in the request for later use
    req.user = user;
    next();
  });
}

// Middleware to authorize users based on their roles
export function authorizeUser(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role || '';

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Unauthorized. You do not have permission to access this resource.' });
    }

    next();
  };
}
