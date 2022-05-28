import mongoose from "mongoose";
import Hotel from "./Hotels.js";

const roomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    maxGuests: { type: Number, required: true },
    roomNumbers: [{ roomNumber: Number, unavailable: { type: [Date] } }],
  },
  { collection: "Rooms", timestamps: true }
);

export default mongoose.model("Room", roomSchema);
