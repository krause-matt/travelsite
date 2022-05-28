import express from "express";
import {
  getAllUsers,
  getUser,
  editUser,
  deleteAllUsers,
  deleteUser,
} from "../controllers/users.js";
import { checkAdmin, checkAuthorization } from "../utils/tokenAuth.js";

const router = express.Router();

// READ (All)
router.get("/all", checkAdmin, getAllUsers);

// READ (Single)
router.get("/:id", checkAuthorization, getUser);

// UPDATE
router.put("/:id", checkAuthorization, editUser);

// DELETE (All)
router.delete("/all", checkAdmin, deleteAllUsers);

// DELETE (Single)
router.delete("/:id", checkAuthorization, deleteUser);

export default router;
