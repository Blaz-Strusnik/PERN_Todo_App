// src/server.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import { authenticateUser } from './middleware/authMiddleware';
import sequelize from './config/database';

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.json());
app.use(cors());

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});

// Routes for authentication
app.use('/auth', authRoutes);


// Routes for tasks (with authentication and authorization)
app.use('/', authenticateUser, taskRoutes);

