import express from "express";
import {
  createHotel,
  getAllHotels,
  getHotel,
  editHotel,
  deleteAllHotels,
  deleteHotel,
  cityCount,
  typeCount,
} from "../controllers/hotels.js";
import { checkAdmin } from "../utils/tokenAuth.js";

const router = express.Router();

// READ (Unique DB Stats)
router.get("/cityCount", cityCount);
router.get("/typeCount", typeCount);

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
