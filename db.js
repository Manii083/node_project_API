import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/new_project";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
