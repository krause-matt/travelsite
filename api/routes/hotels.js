import express from "express";
import {
  createHotel,
  getAllHotels,
  getHotel,
  editHotel,
  deleteAllHotels,
  deleteHotel,
} from "../controllers/hotels.js";
import { checkAdmin } from "../utils/tokenAuth.js";

const router = express.Router();

// CREATE
router.post("/", checkAdmin, createHotel);

// READ (All)
router.get("/all", getAllHotels);

// READ (Single)
router.get("/:id", getHotel);

// UPDATE
router.put("/:id", checkAdmin, editHotel);

// DELETE (All)
router.delete("/all", checkAdmin, deleteAllHotels);

// DELETE (Single)
router.delete("/:id", checkAdmin, deleteHotel);

export default router;
