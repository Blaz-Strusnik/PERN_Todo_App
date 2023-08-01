// customTypes.d.ts

import  User  from './src/models/User'; // Import the User model

declare global {
  namespace Express {
    interface Request {
      user?: User; // Extend the Request interface to include the user property
    }
  }
}
