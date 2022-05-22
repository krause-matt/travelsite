import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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

app.use(express.json());

app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "An error occurred.";
  const errStack = err.stack || "No error stack available";
  return res.status(errStatus).json({
    status: errStatus,
    message: errMessage,
    stack: errStack,
  });
});

app.listen(port, () => {
  console.log(`Travelsite listening on port ${port}`);
  dbConnect();
});
