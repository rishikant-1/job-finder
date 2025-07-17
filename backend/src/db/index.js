import mongoose from "mongoose";
import DB_NAME from "../constent.js";

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected successfully", connectionInstance.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;