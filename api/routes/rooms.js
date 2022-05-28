import express from "express";
import {
  createRoom,
  getAllRooms,
  getRoom,
  editRoom,
  deleteAllRooms,
  deleteRoom,
} from "../controllers/rooms.js";
import { checkAdmin } from "../utils/tokenAuth.js";

const router = express.Router();

// CREATE
router.post("/:hotelId", checkAdmin, createRoom);

// READ (All)
router.get("/all", getAllRooms);

// READ (Single)
router.get("/:id", getRoom);

// UPDATE
router.put("/:id", checkAdmin, editRoom);

// DELETE (All)
router.delete("/all", checkAdmin, deleteAllRooms);

// DELETE (Single)
router.delete("/:id", checkAdmin, deleteRoom);

export default router;
