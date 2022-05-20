import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const port = 3000;

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Travelsite connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error");
    throw error;
  }
};

app.listen(port, () => {
  console.log(`Travelsite listening on port ${port}`);
  dbConnect();
});
