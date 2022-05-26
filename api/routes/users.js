import express from "express";
import {
  getAllUsers,
  getUser,
  editUser,
  deleteAllUsers,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// READ (All)
router.get("/all", getAllUsers);

// READ (Single)
router.get("/:id", getUser);

// UPDATE
router.put("/:id", editUser);

// DELETE (All)
router.delete("/all", deleteAllUsers);

// DELETE (Single)
router.delete("/:id", deleteUser);

export default router;
