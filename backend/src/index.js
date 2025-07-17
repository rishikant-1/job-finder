import { app } from "./app.js";
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config(
  { 
    path: './.env'
  }
);

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  });
  app.on('error', (err) => {
    throw new Error(`Server error: ${err}`);
  });
})
.catch((err) => {
  console.error('MONGO_DB connection error:', err);
  process.exit(1); // Exit the process with failure
});