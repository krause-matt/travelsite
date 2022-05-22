import express from "express";
import {
  createHotel,
  getAllHotels,
  getHotel,
  editHotel,
  deleteAllHotels,
  deleteHotel,
} from "../controllers/hotels.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// READ (All)
router.get("/all", getAllHotels);

// READ (Single)
router.get("/:id", getHotel);

// UPDATE
router.put("/:id", editHotel);

// DELETE (All)
router.delete("/all", deleteAllHotels);

// DELETE (Single)
router.delete("/:id", deleteHotel);

export default router;
