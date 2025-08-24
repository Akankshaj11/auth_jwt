# Authentication with JWT (MERN)

This is a simple authentication system built using the MERN stack where login and signup are handled with JWT tokens. The project demonstrates how to create a user, securely store passwords using bcrypt, and authenticate requests using JSON Web Tokens.

## Features
- User signup with hashed passwords  
- User login with JWT authentication  
- Protected routes using middleware  
- MongoDB for storing user data  
- React frontend for signup and login  

## Tech Stack
- **Frontend:** React, Tailwind CSS (optional for styling)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Token (JWT), bcrypt  

## Project Structure
auth_jwt/
│
├── backend/
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes (auth related)
│ ├── middleware/ # Auth middleware for protected routes
│ ├── server.js # Main backend entry point
│
├── frontend/
│ ├── src/
│ │ ├── components/ # React components (Login, Signup)
│ │ ├── App.jsx
│ │ ├── main.jsx
│
├── .env # Environment variables (JWT_SECRET, MONGODB_URI)
├── package.json


## API Endpoints
### Auth Routes
- **POST** `/api/register` → Register new user  
- **POST** `/api/login` → Login user and return token  
- **GET** `/api/profile` → Example of a protected route  

## How It Works
1. User signs up → password gets hashed and stored in MongoDB.  
2. User logs in → JWT token is generated and sent back.  
3. Frontend stores the token in localStorage or sessionStorage.  
4. For protected requests, the token is sent in the `Authorization` header as `Bearer <token>`.  
5. Middleware verifies the token and grants access.  

## Setup Instructions
1. Clone the repo  
   ```bash
   git clone https://github.com/Akankshaj11/auth_jwt.git
   cd auth_jwt
Install dependencies

cd backend && npm install
cd ../frontend && npm install
Create .env file in backend with:

MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
Start backend

cd backend
npm run dev
Start frontend

cd frontend
npm run dev
