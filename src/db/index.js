import mongoose from "mongoose";

const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");

  const conn = await mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000
  });

  console.log(`✅ MongoDB connected: ${conn.connection.host}`);
};

export default connectDB;
