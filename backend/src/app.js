import express from 'express';
import cors from 'cors';  
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.routes.js';
import adminRoute from "./routes/admin.routes.js"
const app = express();


app.use(cors({
  origin: 'https://stackhire-8hqy.onrender.com',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(cookieParser()); 

// rouues
app.use("/api/admin", adminRoute)
app.use("/api/v1/users", userRoute)


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