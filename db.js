// VqTz6QRkuhnVbwx7

// mongodb+srv://manideepkatkam83_db_user:VqTz6QRkuhnVbwx7@cluster0.uem8mvd.mongodb.net/?appName=Cluster0
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await  mongoose.connect("mongodb+srv://manideepkatkam83_db_user:VqTz6QRkuhnVbwx7@cluster0.uem8mvd.mongodb.net/?appName=Cluster0");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }}