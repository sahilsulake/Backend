import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

console.log("ENV CHECK 👉", {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
});

const app = express();
app.use(express.json());

const startServer = async () => {
  console.log("🚀 Starting server...");

  await connectDB(); // ⬅️ MUST pause here

  app.listen(process.env.PORT, () => {
    console.log(`🔥 Server running on port ${process.env.PORT}`);
  });
};

startServer();
