import express from 'express';
import cors from 'cors';  
import cookieParser from 'cookie-parser';
import { router } from './routes/user.routes.js';
const app = express();


app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Use a specific origin or '*' for all origins
  credentials: true, // Allow credentials
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(cookieParser()); // Use cookie-parser middleware

// rouues
app.use("/api/v1/users", router)


app.use((err, req, res, next) => {
  const statusCode = typeof err.statusCode === 'number' ? err.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Something went wrong',
    errors: err.errors || [],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});


export {app};